// !! getStaticProps run on server (node)
// server api is available
import fs from 'fs';
import path from 'path';

export function getPostsList(){
  try {
    // dont use __dir__, in prod it will different
    // root/post/title-of-post-file
    const postsDir = path.join(process.cwd(), 'pages/post')

    return fs
      .readdirSync(postsDir)
      .map(filename => (
        filename.substring(0, filename.indexOf('.'))
      ))


  } catch {
    console.warn("there are no posts");
    return []
  }
}