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
      <span>{entry.date.month}</span>
      <span>{entry.date.day}</span>
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
    <div className="container">
    <h1>2022 Festival Schedule</h1>
    <p>The CMUIFF is excited to announce that we are working hard to return to an in-person format for the 2021-2022 festival. As the nature of the pandemic changes, and vaccines have allowed for reopenings, we are working to provide a safe and engaging experience to view films together again as a community.</p>
    <List Item={Item} data={[]} emptyText="No events scheduled" />

    </div>
    <div className="container">
    <h1>2020-2021 Festival Schedule</h1>
    <List Item={Item} data={listData.data} />
    </div>
    </BaseLayout>
  )
}
