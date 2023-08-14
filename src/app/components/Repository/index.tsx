import { Circle, GripVertical, RocketIcon } from 'lucide-react'
import styles from './Repository.module.css'

interface RepositoryProps {
  title: string
  color: string
  tecnology: string
  link: string
}

export function Repository({ title, color, tecnology, link }: RepositoryProps) {
  return (
    <div className={styles.container}>
      <a
        href={link}
        className={styles.repository}
        target="_blank"
        rel="noreferrer"
      >
        <header>
          <div className={styles.titleRepository}>
            <RocketIcon size={20} />

            <span>{title}</span>
          </div>

          <GripVertical size={20} />
        </header>
        <footer>
          <Circle style={{ color }} size={20} />
          <span>{tecnology}</span>
        </footer>
      </a>
    </div>
  )
}
