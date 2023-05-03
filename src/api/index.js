import app from "@/fb/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";
import { db } from "@/fb/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

export { getDoc, doc, db };
