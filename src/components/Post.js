import { getPosts } from "@/api/getList";
import { useEffect, useState } from "react";

export default function Post() {
  const [list, setList] = useState();

  async function getData() {
    console.log(getPosts());
    setList(await getPosts());
  }

  useEffect(() => {
    getData();
    console.log(list);
  }, []);

  return (
    <div>
      {!list ? (
        <></>
      ) : (
        Object.keys(list).map((el, idx) => {
          return (
            <div key={idx}>
              {list[el].title} 작성자 | gcvcgcgcgcgcgcgcfcg{list[el].author}
            </div>
          );
        })
      )}
    </div>
  );
}
