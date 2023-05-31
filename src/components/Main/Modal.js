import styles from "@/styles/Modal.module.scss";

export default function Modal({ list, setModalNo }) {
  function eventPreventer(e) {
    e.stopPropagation();
  }

  function closeModal() {
    setModalNo("-1");
  }

  console.log(list);

  return (
    <div className={styles.wrap} onClick={closeModal}>
      <span onClick={closeModal}>XXXXX</span>
      <div className={styles.box} onClick={eventPreventer}>
        {/* {list.contend} */}
      </div>
    </div>
  );
}
