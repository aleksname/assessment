import React from 'react'
import MainContainer from './MainContainer'
import styles from './styles/styles.module.scss'

export default function home() {
    

  return (
    <MainContainer>
        <div className={styles.wrapper}>
              <h1 className={styles.title}>Посилання на Кахут</h1>
              <div className={styles.kahootLinkBlock}>
                  <div className={styles.kahootInputBlock}>
                      <input className={styles.kahootInput} placeholder='Put link' />
                  </div>
                      <div className={styles.kahootButtonblock}>
                        <button  className={styles.kahootButton}>Send</button>  
                      </div>
              </div>
        </div>  
    </MainContainer>
  )
}
