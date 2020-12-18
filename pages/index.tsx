// TODO: builtin type for it
// import { GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';

import Head from 'next/head'
import Header from '@components/Header';
import Navigation from '@components/Navigation';

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
                {/* to make more readable */}
                {slug.replace(/-/g, " ")}
              </li>
            ))}
          </ul>
        )}
      </main>

    </>
  )
}

// on page component where build method is static
export const getStaticProps = async () => {

  // need to typing whatever getStaticProps is giving
  const posts:PostList = getPosts()
  return {
    props: {
      posts
    }
  }
}


export default Home