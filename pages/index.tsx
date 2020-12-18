// TODO: builtin type for it
// import { GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';

import Head from 'next/head'
import Link from 'next/link';
import Header from '@components/Header';
import Navigation from '@components/Navigation';
import { getPostsList } from '@shared/util';

// prepare posts to show on page
type PostList = string[]


function Home({ posts }:InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>

      <main>
        <Navigation/>
        <Header/>
        {posts.length > 0 && (
          <ul>
            {posts.map((slug) => (
              <li key={slug}>
                <Link href={`post/${slug}`}>
                  <a>
                    {slug.replace(/-/g, " ")}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>

    </>
  )
}

// on page component where build method is static
// getStaticProps is running on server (server api is avail)
export const getStaticProps = async () => {

  // need to typing whatever getStaticProps is giving
  const posts:PostList = getPostsList()
  return {
    props: {
      posts
    }
  }
}


export default Home