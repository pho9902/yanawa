import styles from "@/styles/main.module.scss";
import temp from "@/pages/api/hello";

export default function Main() {
  console.log(process.env.NEXT_PUBLIC_APIKEY);
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

  return (
    <div className={styles.wrap}>
      <button onClick={() => temp()}>adsf </button>
      <div>
        <label>
          운동
          <input
            type="checkbox"
            onChange={({ target: { checked } }) => onChange(checked)}
          />
        </label>
        <label>
          스터디
          <input
            type="checkbox"
            onChange={({ target: { checked } }) => onChange(checked)}
          />
        </label>
        <label>
          주말
          <input
            type="checkbox"
            onChange={({ target: { checked } }) => onChange(checked)}
          />
        </label>
        <label>
          평일
          <input
            type="checkbox"
            onChange={({ target: { checked } }) => onChange(checked)}
          />
        </label>
        <label>
          온라인
          <input
            type="checkbox"
            onChange={({ target: { checked } }) => onChange(checked)}
          />
        </label>
      </div>
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
