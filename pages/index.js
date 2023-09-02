import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>ELLOOOOOO, Ya Dola Here with some B-logs!</p>
        <p>
          You'll be reading through my journey as a NextJs Developer down below.
        </p>
        <p>Have Fun 💃</p>
        <p>Or Else 🔪</p>
        {/*<p>*/}
        {/*  (This is a sample website - you’ll be building a site like this on{" "}*/}
        {/*  <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)*/}
        {/*</p>*/}
      </section>
    </Layout>
  );
}
