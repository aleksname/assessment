import React from 'react'
import MainContainer from './MainContainer'
import styles from './styles/styles.module.scss'
import Image from 'next/image'
import gamesTextIcon from '../public/gamesPage/anogmarIcon.png'
import GamesAnogramaEl from './GamesAnogramaEl'
import GamesAnogramaInput from './GamesAnogramaInput'

export default function games() {
  return (
      <MainContainer titels={'Game page'}>
        <div className={styles.wrapperGames}>
            <div className={styles.startScreen}>
                <div className={styles.gamesTitleBlock}>
                      <div className={styles.gamesText}>
                          <span className={styles.gamesTextSpan}>Анаграма</span>  – це слово або фраза, створена шляхом перестановки літер іншого слова або фрази. Наприклад, слово <span className={styles.gamesTextSpan}>"м'яч"</span> можна перетворити на <span className={styles.gamesTextSpan}>"чям"</span>. Важливо, щоб усі літери залишалися ті ж самі, просто в іншому порядку. Це весела гра зі словами, яка допомагає розвивати увагу та мислення!
                      </div>
                      <Image src={gamesTextIcon} alt={gamesTextIcon} className={styles.gamesTextIcon} />  
                </div>
              <div className={styles.gamesAnogramBlock}>
                <div className={styles.anogrgamTitle}>Анограма</div>
                <div className={styles.anogramActiveBlock}>
                    <div className="">
                      <div className={styles.anogramWorld}>Анограма</div>
                      <GamesAnogramaEl/>
                    </div>
                    <div className="">
                    <div className={styles.anogramWorld}>Відповіді</div>
                      <GamesAnogramaInput/>
                    </div>
                </div>
            
              </div>
            </div>
        </div>
      </MainContainer >    
  )
}
