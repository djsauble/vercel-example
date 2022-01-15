import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          XD Team: User Guides
        </h1>
        <h2>
          <Link href="/guides/daniel">
            <a>🏃‍♂️ Daniel Sauble</a>
          </Link>
        </h2>
      </main>
    </div>
  )
}
