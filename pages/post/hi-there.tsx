import Navigation from '@components/Navigation';
import Image from 'next/image';
export default function Hi(){
  return (
    <>
      <Navigation/>
      <div>
        <h3>Hi there</h3>
        <p>this is a 1st post</p>
        <Image
          src="/post/hi-there/road.jpg"
          width={480}
          height={640}
        />
        <p>photo by <a href="https://unsplash.com/@anniespratt">Annie Spratt</a> on Unsplash</p>
      </div>
    </>
  )
}