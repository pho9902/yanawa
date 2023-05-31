import styles from "@/styles/Header.module.scss";
import { getUserInfo } from "@/utils/getUserInfo";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [userInfo, setUserInfo] = useState();
  function setUserData() {
    getUserInfo(setUserInfo);
  }
  useEffect(() => {
    setUserData();
  }, [userInfo]);
  return (
    <div className={styles.wrap}>
      <Link href="/">Header</Link>
      {userInfo ? <></> : <Link href="/login">로그인</Link>}
      <Link href="/post">게시글 테스트</Link>
    </div>
  );
}
