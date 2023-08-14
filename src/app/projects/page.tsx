import { Header } from '../components/Header'
import styles from '../../styles/pages/Projects.module.css'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { repository } from '@/database'
import { Circle, GripVertical, RocketIcon } from 'lucide-react'

export default function Projects() {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />

      <div className={styles.mainContainer}></div>

      <main className={styles.main}>
        <div className={styles.projects}>
          <span>Meus Projetos</span>

          <div className={styles.listProjects}>
            <ul>
              {repository.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <header>
                        <div>
                          <RocketIcon />
                          <span>{item.title}</span>
                        </div>

                        <GripVertical size={18} />
                      </header>

                      <main>
                        <Circle size={18} color={item.color} />
                        <span>{item.linguage}</span>
                      </main>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
