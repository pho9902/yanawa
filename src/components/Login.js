import styles from "@/styles/Login.module.scss";

export default function Login() {
  return (
    <div className={styles.wrap}>
      <div>여러 플랫폼의 회원정보로 로그인하세요</div>
      <div className={styles.logoBox}>
        <div>구글로고</div>
        <div>구글로고</div>
        <div>구글로고</div>
        <div>구글로고</div>
      </div>
    </div>
  );
}
