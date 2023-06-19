import styles from "@/styles/modal.module.scss";
import Link from "next/link";
import { GrClose } from "react-icons/gr";

export default function Modal({ setModalNo, currentPost }) {
  function eventPreventer(e) {
    e.stopPropagation();
  }

  function closeModal() {
    setModalNo("-1");
  }

  return (
    <div className={styles.wrap} onClick={closeModal}>
      <Link href="/" onClick={closeModal}>
        <GrClose className={styles.closeBtn} />
      </Link>
      <div className={styles.box} onClick={eventPreventer}>
        <div className={styles.modalHeader}>
          <h2>{currentPost.title}</h2>
          <span className={styles.author}>author : {currentPost.author}</span>
        </div>
        <span className={styles.contend}>{currentPost.contend}</span>
      </div>
    </div>
  );
}
