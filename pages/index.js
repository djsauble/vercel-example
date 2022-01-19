import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">XD Team: User Guides</h1>
        <ul>
          <li>
            <Link href="/guides/daniel">
              <a>Daniel</a>
            </Link>
          </li>
          <li>
            <Link href="/guides/ash">
              <a>Ash</a>
            </Link>
          </li>
          <li>
            <Link href="/guides/jonathan">
              <a>Jonathan</a>
            </Link>
          </li>
          <li>
            <Link href="/guides/lazerguide">
              <a>Lazer</a>
            </Link>
          </li>
          <li>
            <Link href="/guides/meera">
              <a>Meera</a>
            </Link>
          </li>
          <li>
            <Link href="/guides/jessica">
              <a>Jessica</a>
            </Link>
          </li>
          <li>
            <Link href="/guides/cole">
              <a>Cole</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
