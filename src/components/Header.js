import styles from "@/styles/header.module.scss";
import { getUserInfo } from "@/utils/getUserInfo";
import Link from "next/link";
import { useEffect, useState } from "react";

import { auth } from "@/fb/firebaseConfig";
import { signOut } from "firebase/auth";

export default function Header() {
  const [userInfo, setUserInfo] = useState();
  function setUserData() {
    getUserInfo(setUserInfo);
  }

  function moveMaintWithReload() {
    window.location.href = "/";
  }

  function onClickLogOut() {
    signOut(auth)
      .then((_) => {
        if (window.confirm("로그아웃 하시겠습니까?")) {
          moveMaintWithReload();
        }
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    setUserData();
  }, [userInfo]);
  return (
    <div className={styles.wrap}>
      <Link href="/">
        <img className={styles.logo} src="/logo.png" />
      </Link>
      {userInfo ? (
        <span className={styles.logout} onClick={onClickLogOut}>
          로그아웃
        </span>
      ) : (
        <Link className={styles.login} href="/login">
          로그인
        </Link>
      )}
    </div>
  );
}
