import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ParticleBackground from '../components/Background'
import NavBar from '../components/Navbar'
import DecryptText from '../components/Hero'

export default function Home() {
  return (
    <div className={styles.container}>
      <div id={styles.home}>
        <div className={styles.main}>
          <ParticleBackground />
        </div>
        <NavBar />
        <div className={styles.main_div}>
          <DecryptText></DecryptText>
        </div>
      </div>
    </div>
  )
}
