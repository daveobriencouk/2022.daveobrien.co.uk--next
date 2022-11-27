import Head from 'next/head'
import Link from 'next/link'

import { getNotes } from 'models/note'

type Post = {
  slug: string
  frontmatter: {
    title: string
  }
}

type NotesProps = {
  posts: Post[]
}

export default function Notes({ posts }: NotesProps) {
  return (
    <div className="p-10">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-300 p-10">
        <h1 className="mb-10">Notes</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/notes/${post.slug}`}>{post.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const posts = getNotes()

  return {
    props: {
      posts,
    },
  }
}
