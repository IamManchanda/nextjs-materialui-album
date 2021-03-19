import { Fragment } from "react";
import Head from "next/head";

function PageIndex() {
  return (
    <Fragment>
      <Head>
        <title>Next.js MaterialUI (Photo) Album</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </Fragment>
  );
}

export default PageIndex;
