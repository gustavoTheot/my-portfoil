import styles from './Navbar.module.css'

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <a href={'/projects'}>Projetos</a>
        </li>
        <li>
          <a href={'/'}>Currículo</a>
        </li>
      </ul>
    </div>
  )
}
