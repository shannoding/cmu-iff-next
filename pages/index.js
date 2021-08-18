import Head from 'next/head'
import BaseLayout from '../components/BaseLayout'

import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <BaseLayout title="Home" activeItem={1}>
    <div className={styles.landingImage}>
    </div>
    <h1>Yeehaw home</h1>
    </BaseLayout>
  )
}
