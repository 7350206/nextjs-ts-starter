import Navigation from '@components/Navigation';
import Head from 'next/head';
import Image from 'next/image';
export default function Hi(){
  return (
    <>
      <Navigation/>
      <Head>
        <title>Hi there :: my blog</title>
        <meta property="og:title" content="Hi there :: my blog"/>
      </Head>
      <article>
        <h3>Hi there</h3>
        <p>this is a 1st post</p>
        <Image
          src="/post/hi-there/road.jpg"
          width={480}
          height={640}
        />
        <p>photo by <a href="https://unsplash.com/@anniespratt">Annie Spratt</a> on Unsplash</p>
      </article>
    </>
  )
}