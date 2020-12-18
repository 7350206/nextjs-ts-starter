import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Navigation.module.css';


const LINKS = [
  {
    name:"Home",
    url:"/"
  },
  {
    name: "Product",
    url: "/product"
  },
  {
    name: "About",
    url:"/about"
  }
]

type Nav = {
  path: string
  children: ReactNode
}

function NavLink({path, children}: Nav){
  return (
    <Link href={path}>
      {/* className != style */}
      <a className={styles.NavLink}>{children}</a>
    </Link>
  )
}

export default function Navigation(){

  // make an active state of route link
  const { pathname } = useRouter()

  return (
    <nav>
    <ul className={styles.list}>
      {LINKS.map(({ name, url }) => (
        <li key={url}>
          { url === pathname
            ? <span>{name}</span>
            : <NavLink path={url}>{name}</NavLink>
          }
        </li>
      ))}
    </ul>
    </nav>
  )
}