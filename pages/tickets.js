import Link from 'next/link'

import BaseLayout from '../components/BaseLayout'
import List from '../components/List'
import { getListData } from '../lib/lists'
const { basePublicPath } = require('../next.config')


import styles from '../styles/tickets.module.css'


export async function getStaticProps() {
const listData = await getListData('tickets')  
return {
    props: {
      listData
    }
  }
}

function Item(entry) {

  return (
    <div className={styles.ticketContainer}>
    <div className={styles.ticketHeaderContainer}>
    <h4><Link href={`/films/${entry.filmId}`}><a>{entry.name}</a></Link></h4>
    <p className={styles.caption}>{entry.caption}</p>
    </div>
    <div className={styles.imageContainer}>
      <img 
      src={`${basePublicPath}/assets/films${entry.src || "/placeholder.png"}`}
      alt={`${entry.name} film poster`}
      />      
    </div>
    <div className={styles.aboutContainer}>
      <p>{entry.description}</p>
    </div>
    </div>
    );
}

export default function Tickets({ listData }) {
  return (
    <BaseLayout title="Tickets">
    <div className="container">
    <h1>Tickets</h1>
    <h2>ONLINE Event Tickets</h2>
    <List Item={Item} data={listData.data} />
    </div>
    </BaseLayout>
  )
}