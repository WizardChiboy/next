import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FacebookShareButton, FacebookIcon } from "next-share";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          property="og:url"
          content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="about here" />
        <meta property="og:description" content="about desc" />
        <meta
          property="og:image"
          content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
        />
      </Head>

      <main className={styles.main}>
        <FacebookShareButton url={"https://sage-starburst-317c1e.netlify.app"}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </main>
    </div>
  );
}
