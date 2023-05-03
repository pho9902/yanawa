import { getDoc, doc, db } from "./";

async function instance(table) {
  const docRef = doc(db, "website", table);
  const docSnap = await getDoc(docRef);

  // console.log("docSnap.data().post :>> ", docSnap.data().post);
  return docSnap.data().post;
}
export function getPosts() {
  return instance("group");
}

export function getTags() {
  return instance("tag");
}
