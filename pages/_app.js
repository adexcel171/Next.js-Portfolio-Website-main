import "@/styles/globals.css";
import Head from "next/head";
import Layout from "@/components/Layout";
import AboutPage from "./about";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
 

    </Layout>
  );
}

export default MyApp;
