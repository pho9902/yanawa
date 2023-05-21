import { getDoc, doc, db } from "./";
// import { firestore } from "firebase";

async function instance(table) {
  const docRef = doc(db, "website", table);
  const docSnap = await getDoc(docRef);

  // console.log("docSnap.data().post :>> ", docSnap.data().post);
  return docSnap.data();
}
export function getPosts() {
  return instance("group");
}

export function getTags() {
  return instance("tag");
}

export async function addPost() {
  // const group = .collection("website");
  doc(db, "website", "group").set({
    2: {
      title: "testeteststtestest",
      author: "박현우",
      tag: [1, 4, 7],
      contend: "description",
      imgUrl: "www.test.com",
      date: "230510",
    },
  });
}
