import Head from 'next/head'
import Link from 'next/link'

import { generateMetaTitle } from 'utils/generateMetaTitle'
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
    <>
      <Head>
        <title>{generateMetaTitle('Notes')}</title>
        {/* <meta name="description" content="" /> */}
      </Head>

      {/* TODO: #16 Style notes page */}
      {/* TODO: #17 Add notes content */}
      <main className="mx-two">
        <h1 className="text-lg font-black tracking-tighter uppercase mb-one font-display md:text-md lg:text-lg text-neutral-500">
          Notes
        </h1>
        <div className="rounded cursor-pointer bg-neutral-200 mb-one py-half px-one hover:bg-neutral-300">
          {/* Hero icon search */}
          Search
          {/* keyboard shortcut */}
        </div>
        <ul>
          {posts.map((post) => (
            <li key={post.slug} className="mb-one">
              <article>
                <h1 className="text-2xl font-black font-display md:text-3xl lg:text-4xl">
                  <Link
                    href={`/notes/${post.slug}`}
                    className="hover:underline underline-offset-2 text-neutral-500 hover:text-neutral-700"
                  >
                    {post.frontmatter.title}
                  </Link>
                </h1>
                <div className="flex justify-between">
                  <ul className="flex gap-one">
                    <li>Tags</li>
                    <li>Tags</li>
                    <li>Tags</li>
                  </ul>
                  <time dateTime="2013-02-20">2013-02-20</time>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </main>
    </>
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
