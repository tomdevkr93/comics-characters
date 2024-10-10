import { auth } from '@/auth'
import styles from './page.module.css'

export default async function HomePage() {
  const session = await auth()
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>MARVEL CHARACTERS</h1>
        <p>Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!</p>
      </header>
    </div>
  )
}
