import styles from "@/styles/Main.module.scss";
import { getPosts } from "@/api/getList";
import { useEffect, useState } from "react";
import { checkQueryString } from "@/utils/checkQS";
import { auth } from "@/fb/firebaseConfig";

export default function Main() {
  const [list, setList] = useState();

  const onChange = (state) => {
    return !state;
  };

  async function getData() {
    setList(await getPosts());
  }

  useEffect(() => {
    checkQueryString();
    getData();
    // console.log(auth.)
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.filterBox}>
        <label className={styles.checkboxDiv}>
          운동
          <input
            type="checkbox"
            onChange={({ target: { checked } }) => onChange(checked)}
          />
        </label>
        <label className={styles.checkboxDiv}>
          스터디
          <input
            type="checkbox"
            onChange={({ target: { checked } }) => onChange(checked)}
          />
        </label>
        <label className={styles.checkboxDiv}>
          주말
          <input
            type="checkbox"
            onChange={({ target: { checked } }) => onChange(checked)}
          />
        </label>
        <label className={styles.checkboxDiv}>
          평일
          <input
            type="checkbox"
            onChange={({ target: { checked } }) => onChange(checked)}
          />
        </label>
        <label className={styles.checkboxDiv}>
          온라인
          <input
            type="checkbox"
            onChange={({ target: { checked } }) => onChange(checked)}
          />
        </label>
      </div>

      <div>
        {!list ? (
          <div></div>
        ) : (
          list.map((el, idx) => {
            return (
              <div key={idx}>
                {el.title} 작성자 : {el.author}
                {el.tag.map((ele, index) => {
                  return <div key={index}>{ele}</div>;
                })}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
