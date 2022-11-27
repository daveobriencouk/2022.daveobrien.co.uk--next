import Head from 'next/head'

export default function Home() {
  return (
    <div className="p-10">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-300 p-10">
        <h1 className="mb-10">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}
