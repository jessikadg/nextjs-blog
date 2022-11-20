import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi! I'm Jess, a Frontend Engineer based in the Netherlands.
          React, Typescript and NextJS are my main areas currently, but I have
          also worked with many other frameworks, Content Management Systems and
          libraries.
        </p>
        <p>
          I created this small project in NextJS, a framework for React,
          displaying a couple blog posts which are generated automatically from
          a folder with .md files. Feel free to check the code for this project
          on <a href="https://github.com/jessikadg/nextjs-blog">my Git Repo</a>
        </p>
        <p>
          This project was done by following this{" "}
          <a href="https://nextjs.org/learn">official Next.js tutorial</a> and
          studying their documentation. Once it was done, I uploaded it to
          Github and deployed it using Vercel.
        </p>
        <p>Thanks for your visit!</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
