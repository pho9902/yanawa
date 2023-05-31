import styles from "@/styles/Login.module.scss";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from "@firebase/auth";
import { auth } from "@/fb/firebaseConfig";

export default function Login() {
  async function handleSocialLogin(social) {
    let provider;
    switch (social) {
      case "twitter":
        provider = new TwitterAuthProvider();
        break;
      case "google":
        provider = new GoogleAuthProvider();
        break;
      case "facebook":
        provider = new FacebookAuthProvider();
        break;
      default:
        break;
    }

    signInWithPopup(auth, provider)
      .then((res) => (location.href = "/"))
      .catch((err) => alert(err));
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.loginbox}>
        여러 인증된 플랫폼의 회원정보로 로그인하세요
      </div>
      <div className={styles.logoBox}>
        <div
          className={styles.logo}
          onClick={() => handleSocialLogin("google")}
        >
          구글로고
        </div>
        <div
          className={styles.logo}
          onClick={() => handleSocialLogin("facebook")}
        >
          페북로고
        </div>
        <div
          className={styles.logo}
          onClick={() => handleSocialLogin("twitter")}
        >
          트위터로고
        </div>
      </div>
    </div>
  );
}
