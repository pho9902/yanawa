import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/fb/firebaseConfig";

export async function getUserInfo(setState) {
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      setState(user);
    }
  });
}
