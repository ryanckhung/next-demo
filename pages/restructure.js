import Head from "next/head";
import Layout from "../components/Layout";

const Restructure = () => (
  <div>
    <Layout title="child title" footer="copyright footer">
      <Head>
        <title>Restructure</title>
      </Head>
      <h1>Children</h1>
    </Layout>
  </div>
);

export default Restructure;
