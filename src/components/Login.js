import styles from "@/styles/Login.module.scss";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from "@firebase/auth";
import { auth } from "@/fb/firebaseConfig";
import { useState } from "react";

export default function Login() {
  const [userInfo, setUserInfo] = useState();

  async function handleTwitterLogin() {
    const provider = new TwitterAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  async function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err)); // popup을 이용한 signup
  }

  async function handleFacebookLogin() {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.wrap}>
      <div>여러 인증된 플랫폼의 회원정보로 로그인하세요</div>
      <div className={styles.logoBox}>
        <div onClick={handleGoogleLogin}>구글로고</div>
        <div onClick={handleFacebookLogin}>페북로고</div>
        <div onClick={handleTwitterLogin}>트위터로고</div>
      </div>
    </div>
  );
}
