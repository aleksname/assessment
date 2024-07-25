import Head from 'next/head'
import styles from './styles/styles.module.scss'

export default function MainContainer({ children, keywords, titels }) {
  return (
    <>
      <Head>
        <meta name="keywords" content={"nextjs, alexname main page" + keywords}></meta>
        <title>{titels}</title>
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <div className={styles.headerBlock}>
        {/* <HeaderNav /> */}
      </div>
      <div>{children}</div>
    </>
  )
}
