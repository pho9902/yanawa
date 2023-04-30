import Header from "@/components/Header";
import * as styles from "@/styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
