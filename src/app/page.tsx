import { Header } from './components/Header'
import styles from '../styles/pages/Home.module.css'
import { contact, listRouter, skill } from '@/database'
import { GraduationCap } from 'lucide-react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />

      <div className={styles.mainContainer}>
        <nav className={styles.navContainer}>
          <div className={styles.contact}>
            <span className={styles.title}>Detalhes para Contato</span>
            <ul>
              {contact.map((item, index) => {
                return (
                  <>
                    <li key={index}>
                      <span>Email:</span>
                      <span>{item.email}</span>
                    </li>
                    <li key={index}>
                      <span>Telefone:</span>
                      <span>{item.tell}</span>
                    </li>
                    <li key={index}>
                      <span>Telefone:</span>
                      <span>{item.local}</span>
                    </li>
                  </>
                )
              })}
            </ul>
          </div>

          <div className={styles.skills}>
            <span>Skills</span>

            <ul>
              {skill.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
          </div>
        </nav>

        <main className={styles.main}>
          <div className={styles.aboutContainer}>
            <span>
              Olá, meu nome é <strong>Gustavo Theotonio</strong>
            </span>

            <span>
              Eu sou um desenvolvedor web. Apaixonado por tecnologia e pela
              possibilidade de resolver problemas e fazer melhorias no mundo
              através dela.
            </span>
          </div>

          <div className={styles.myRouter}>
            <span>Experiência</span>

            <div className={`${styles.data} ${styles.dataRouter}`}>
              {listRouter.map((item, index) => {
                return (
                  <div className={styles.route} key={index}>
                    <div className={styles.icon}>
                      <GraduationCap />
                    </div>

                    <div className={styles.informationRoute}>
                      <span>{item.data}</span>
                      <span>{item.title}</span>
                      <p>{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
