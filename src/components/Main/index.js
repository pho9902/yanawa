import styles from "@/styles/Main.module.scss";
import { getPosts } from "@/api/getList";
import { useEffect, useState } from "react";
import Post from "./Post";
import Modal from "./Modal";
import { useRouter } from "next/router";
import Link from "next/link";
import { getUserInfo } from "@/utils/getUserInfo";
import { TfiPencilAlt } from "react-icons/tfi";

export default function Main() {
  const [list, setList] = useState();
  const [modalNo, setModalNo] = useState("-1");
  const [addPostNum, setAddPostNum] = useState(0);
  const [userInfo, setUserInfo] = useState();
  const [currentPost, setCurrentPost] = useState();
  const router = useRouter();

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

  return (
    <div className={styles.wrap}>
      <div className={styles.info}>다양한 모임 정보를 확인해보세요</div>
      <div className={styles.container}>
        {!list ? (
          <div></div>
        ) : (
          <Post
            setModalNo={setModalNo}
            list={list}
            setCurrentPost={setCurrentPost}
          />
        )}
      </div>

      {userInfo ? (
        <Link
          className={styles.addLink}
          href={{ pathname: `write/${addPostNum}` }}
        >
          <TfiPencilAlt /> 글쓰기
        </Link>
      ) : (
        <span
          onClick={() => {
            if (confirm("로그인 후 이용가능합니다, 로그인 하시겠습니까?"))
              window.location.href = "/login";
          }}
          className={styles.addSpan}
        >
          <TfiPencilAlt />
          글쓰기
        </span>
      )}

      {modalNo === "-1" ? (
        <></>
      ) : (
        <Modal setModalNo={setModalNo} currentPost={currentPost} />
      )}
    </div>
  );
}
