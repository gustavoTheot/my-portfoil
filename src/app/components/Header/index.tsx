import { links } from '@/database'
import styles from './Header.module.css'
import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src="https://avatars.githubusercontent.com/u/44641003?v=4" alt="" />

      <div className={styles.title}>
        <h2>Gustavo Theot. Silva</h2>
        <span>Web Developer</span>
      </div>

      <div className={styles.socialMedia}>
        {links.map((item) => {
          return (
            <>
              <a href={item.github} target="_blank" rel="noreferrer">
                <GithubIcon size={18} />
              </a>

              <a href={item.linkedin} target="_blank" rel="noreferrer">
                <LinkedinIcon size={18} />
              </a>

              <a href={"mailto:"+item.email} target="_blank" rel="noreferrer">
                <Mail size={18} />
              </a>
            </>
          )
        })}
      </div>
    </header>
  )
}
