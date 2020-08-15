// http://localhost:3001/one

import Link from "next/link";
import Nav from "../components/Nav";
import Head from "next/head";

const One = () => (
  <div>
    <Head>
      <title>One</title>
      <meta name="author" content="Ryan" />
    </Head>
    <Nav />
    <h1>One</h1>
    <Link href="/two">
      <a>Goto Two</a>
    </Link>
  </div>
);

export default One;
