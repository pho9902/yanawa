import { useEffect, useState } from "react";
import styles from "@/styles/write.module.scss";
import { addPost } from "@/api/getList";
import { getUserInfo } from "@/utils/getUserInfo";
import { useRouter } from "next/router";
import CheckBox from "./Main/CheckBox";
import { tagArr } from "@/public/tag";

export default function Write() {
  const router = useRouter();
  const [contend, setContend] = useState("");
  const [title, setTitle] = useState("");
  const [userInfo, setUserInfo] = useState();
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    getUserInfo(setUserInfo);
  }, [userInfo]);

  function onClickConfirm() {
    const nowDate = new Date();
    const month = nowDate.getMonth() + 1;
    const fullDate =
      nowDate.getFullYear().toString() +
      (month < 10 ? "0" + month.toString() : month.toString()) +
      nowDate.getDate().toString();

    const obj = {
      subTag: [],
      tag: [],
    };

    filter.forEach((el) => {
      if (el.tag) obj["tag"].push(el.tag);
      else obj["subTag"].push(el.subTag);
    });

    if (title === "") alert("제목을 입력하세요");
    else if (contend === "") alert("내용을 입력하세요");
    else {
      addPost({
        author: userInfo.displayName,
        contend,
        imgUrl: "www",
        postNo: router.query.pid,
        date: fullDate.substring(2, 8),
        tag: obj,
        title,
      });
    }
  }
  const onChange = (state, id, isSub) => {
    if (state) setFilter([...filter, isSub ? { subTag: id } : { tag: id }]);
    return !state;
  };

  if (!userInfo) return null;

  return (
    <div className={styles.wrap}>
      <input
        className={styles.titleInput}
        placeholder="제목"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.filterBox}>
        <div className={styles.subTagBox}>
          {tagArr.subTag.map((tag, idx) => {
            return (
              <CheckBox
                key={idx}
                idx={idx}
                tag={tag}
                isSub={true}
                onChange={onChange}
              />
            );
          })}
        </div>
        <div className={styles.mainTagBox}>
          {tagArr.tag.map((tag, idx) => {
            return (
              <CheckBox
                key={idx}
                idx={idx}
                tag={tag}
                isSub={false}
                onChange={onChange}
              />
            );
          })}
        </div>
      </div>
      <input
        className={styles.contendInput}
        placeholder="내용"
        onChange={(e) => setContend(e.target.value)}
      />

      <span className={styles.confirmBtn} onClick={onClickConfirm}>
        글쓰기
      </span>
    </div>
  );
}
