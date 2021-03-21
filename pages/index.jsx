import Head from "next/head";
import Link from "next/link";
import Layout from "../src/layouts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Toxin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          44444
          <ul>
            <li>
              <Link href="/ColorsType">Colors & Type</Link>
            </li>
            <li>
              <Link href="/FormElements">Form Elements</Link>
            </li>
            <li>
              <Link href="/Cards">Cards</Link>
            </li>
            <li>
              <Link href="/HeadersFooters">Headers & Footers</Link>
            </li>
          </ul>
        </main>
      </Layout>
    </>
  );
}
