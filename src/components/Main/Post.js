import Link from "next/link";

export default function Post({ list, checkedList, setModalNo }) {
  return (
    <div>
      {!list ? (
        <></>
      ) : (
        list.map((el, idx) => {
          return (
            <Link
              href={{ pathname: "/", query: { postNo: `${el.postNo}` } }}
              key={idx}
              onClick={() => setModalNo(el.postNo)}
            >
              {el.title} 작성자 | {el.author}
            </Link>
          );
        })
      )}
    </div>
  );
}
