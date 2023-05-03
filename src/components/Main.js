import styles from "@/styles/Main.module.scss";
import temp from "@/pages/api/hello";
import { useEffect } from "react";
import { checkQueryString } from "@/utils/checkQS";

export default function Main() {
  const array = [
    {
      title: "test1",
      img: "www.image.co.kr",
      author: "user1",
      tags: ["운동", "주말"],
    },
    {
      title: "test2",
      img: "www.image.co.kr",
      author: "user2",
      tags: ["스터디", "평일", "온라인"],
    },
    {
      title: "test3",
      img: "www.image.co.kr",
      author: "user3",
      tags: ["운동", "평일"],
    },
    {
      title: "test4",
      img: "www.image.co.kr",
      author: "user4",
      tags: ["스터디", "주말"],
    },
  ];
  const onChange = (state) => {
    console.log(state);
    return !state;
  };

  useEffect(() => {
    checkQueryString();
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

      <div></div>
      {array.map((el, idx) => {
        return (
          <div key={idx}>
            {el.title} 작성자 : {el.author}
            {el.tags.map((ele, index) => {
              return <div key={index}>{ele}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
}
