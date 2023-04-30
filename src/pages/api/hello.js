import app from "@/fb/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";
import { db } from "@/fb/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

export default async function temp() {
  const docRef = doc(db, "website", "group");
  const docSnap = await getDoc(docRef);

  console.log(docSnap);
  // const ex = collection(db, "capstone-design-586f9");
  // const result = await getDocs(ex);
  // const data = result.docs.map((el) => el.data());
  // console.log(data);
}
