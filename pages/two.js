// http://localhost:3001/two

import Link from "next/link";
import Nav from "../components/Nav";
import Head from "next/head";

const Two = () => (
  <div>
    <Head>
      <title>Two</title>
      <meta name="author" content="Peter" />
    </Head>
    <Nav />
    <h1>Two</h1>
    <Link href="/one">
      <a>Goto One</a>
    </Link>
  </div>
);

export default Two;
