import Link from 'next/link'


import BaseLayout from '../components/BaseLayout'
import List from '../components/List'
import { getListData } from '../lib/lists'
const { basePublicPath } = require('../next.config')


import styles from '../styles/schedule.module.css'


export async function getStaticProps() {
const listData = await getListData('schedule')  
return {
    props: {
      listData
    }
  }
}

function Item(entry) {
  return (
    <div className={styles.filmContainer}>
    <div className={styles.imageContainer}>
      <div className={styles.dateContainer}>
      <span><b>{entry.date.month}</b> {entry.date.day}</span>
      </div>
      <img 
      src={`${basePublicPath}/assets/films${entry.src || "/placeholder.png"}`}
      alt={`${entry.name} film poster`}
      />      
    </div>
    <div className={styles.aboutContainer}>
      <h5><Link href={`/films/${entry.filmId}`}><a>{entry.name}</a></Link></h5>
      <p>{entry.description}</p>
    </div>
    </div>
    );
}

export default function Schedule({ listData }) {
  return (
    <BaseLayout title="Schedule" activeItem={1}>
    <List Item={Item} data={listData.data} />
    </BaseLayout>
  )
}
