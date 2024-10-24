import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best in the business" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Featured/>
     <PizzaList/>
    </div>
  )
}
