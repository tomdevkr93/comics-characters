import Image from 'next/image'
import styles from './CharacterList.module.css'
import { Magnifier } from '../../../../../public/svgs'

export default function CharacterList() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>MARVEL CHARACTER LIST</h2>
      <form>
        <div className={styles.searchContainer}>
          <Magnifier className={styles.magnifier} />
          <input type="text" placeholder="Search" className={styles.searchInput} />
        </div>
      </form>
      <p className={styles.resultCount}>2837 RESULTS</p>
      <ul className={styles.characterList}>
        {[...Array(10)].map((_, index) => (
          <li key={index} className={styles.character}>
            <div className={styles.imageContainer}>
              <Image src="/images/dummy_character.jpg" alt="dummy character" fill />
            </div>
            <div className={styles.description}>
              <h4>AGENT MOBIUS</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
