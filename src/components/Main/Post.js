import Link from "next/link";
import styles from "@/styles/main.module.scss";

export default function Post({ list, setCurrentPost, setModalNo }) {
  return (
    <div className={styles.postBox}>
      {!list ? (
        <></>
      ) : (
        list.map((el, idx) => {
          return (
            <div className={styles.postDiv} key={idx}>
              <Link
                className={styles.postItem}
                href={{ pathname: "/", query: { postNo: `${el.postNo}` } }}
                onClick={() => {
                  setModalNo(el.postNo);
                  setCurrentPost(el);
                }}
              >
                {el.title}
              </Link>
              <span className={styles.author}> author : {el.author}</span>
            </div>
          );
        })
      )}
    </div>
  );
}
