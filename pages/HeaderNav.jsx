import React from 'react'
import styles from './styles/styles.module.scss'
import Image from 'next/image'
import Logo from '../public/iconResurse/favicon.png'

export default function () {
  return (
      <>
          <div className={styles.headerblockWrapper}>
            <div className={styles.headerBlock}>
                <div className={styles.header}>
                    <h1 className={styles.headerTitle}>ReflexEd</h1>
                    <Image src={Logo} alt={Logo} className={styles.headerLogoImg} />
                </div>
                <nav>
                    <ul className={styles.headerUl}>
                        <li className={styles.headerLinkLi}><a className={styles.headerLink} href="/">Home</a></li>
                        <li className={styles.headerLinkLi}><a className={styles.headerLink} href="/">Progress</a></li>
                        <li className={styles.headerLinkLi}><a className={styles.headerLink} href="/games">Games</a></li>
                        <li className={styles.headerLinkLi}><a className={styles.headerLink} href="/user">My Profile</a></li>
                    </ul>
                </nav>
            </div>
          </div>
    </>
  )
}
