import Head from 'next/head'
import styles from '../styles/Home.module.css'

import BaseLayout from '../components/BaseLayout'

export default function Home() {
  return (
    <BaseLayout pageTitle="Home" activeItem={1}>
    <h1>Yeehaw home</h1>
    </BaseLayout>
  )
}
