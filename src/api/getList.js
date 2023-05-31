import { setDoc } from "firebase/firestore";
import { getDoc, doc, db } from "./";
// import { firestore } from "firebase";

async function instance(table) {
  const docRef = doc(db, "website", table);
  const docSnap = await getDoc(docRef);

  // console.log("docSnap.data().post :>> ", docSnap.data().post);
  return docSnap.data();
}
export async function getPosts() {
  const result = await instance("group");
  return result.posts;
}

export function getTags() {
  return instance("tag");
}

export async function addPost(post) {
  const array = await getPosts();

  setDoc(doc(db, "website", "group"), { posts: [...array, post] });
}
