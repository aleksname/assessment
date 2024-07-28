import React from 'react';
import { dataAnograma } from '../dataAnograma';
import styles from './styles/styles.module.scss'

// dataAnograma.forEach(item => {
//     console.log(`id: ${item.id}, word: ${item.word}`)
// })

export default function GamesAnogramaEl() {
    return (
        <>
            {dataAnograma.map(item => (
                <div className={styles.anogramaEl} key={item.id}>
                    {item.word}
                </div>
            ))}
        </>
  )
}
