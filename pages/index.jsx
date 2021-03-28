import Head from "next/head";
import Link from "next/link";
import Layout from "../src/layouts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Toxin</title>
      </Head>
      <Layout>
        <main>
          <Link href="/SignIn">SignIn</Link>
          <Link href="/">SignOut</Link>
          <Link href="/todos">Todo</Link>
        </main>
      </Layout>
    </>
  );
}
