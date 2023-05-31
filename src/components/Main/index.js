import styles from "@/styles/Main.module.scss";
import { getPosts, addPost } from "@/api/getList";
import { useEffect, useState } from "react";
import { tagArr } from "@/public/tag";
import Post from "./Post";
import CheckBox from "./CheckBox";
import Modal from "./Modal";
import { useRouter } from "next/router";
import Link from "next/link";
import { getUserInfo } from "@/utils/getUserInfo";

import { auth } from "@/fb/firebaseConfig";
import { signOut } from "firebase/auth";

export default function Main() {
  const [list, setList] = useState();
  const [modalNo, setModalNo] = useState("-1");
  const [addPostNum, setAddPostNum] = useState(0);
  const [userInfo, setUserInfo] = useState();
  const checkedList = [];
  const router = useRouter();

  const onChange = (state, id) => {
    if (state) console.log("id :>> ", id); //Todo filter logic
    return !state;
  };

  async function getData() {
    setList(await getPosts());
  }

  function queryStringCheck() {
    if (router.isReady) {
      if (router.query.postNo) {
        if (list) setModalNo(router.query.postNo);
      }
    }
  }

  function getUserData() {
    getUserInfo(setUserInfo);
  }

  useEffect(() => {
    getUserData();
  }, [userInfo]);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    queryStringCheck();
  }, [router, list]);
  useEffect(() => {
    if (list) setAddPostNum(parseInt(list[list.length - 1].postNo) + 1);
  }, [list]);

  function onClickLogOut() {
    signOut(auth)
      .then((res) => {
        if (window.confirm("로그아웃 하시겠습니까?")) moveMaintWithReload();
      })

      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className={styles.wrap}>
        <button onClick={onClickLogOut}>로그아웃</button>
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
          {userInfo ? (
            <Link href={{ pathname: `write/${addPostNum}` }}>추가테스트</Link>
          ) : (
            <></>
          )}
        </div>

        <div>
          {!list ? (
            <div></div>
          ) : (
            <Post
              setModalNo={setModalNo}
              list={list}
              checkedList={checkedList}
            />
          )}
        </div>
      </div>
      {modalNo === "-1" ? (
        <></>
      ) : (
        <Modal list={list[modalNo]} setModalNo={setModalNo} />
      )}
    </>
  );
}
