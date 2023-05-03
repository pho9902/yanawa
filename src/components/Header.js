import styles from "@/styles/Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.wrap}>
      Header
      <Link href={{ pathname: "login" }}>로그인</Link>
    </div>
  );
}
