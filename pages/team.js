import BaseLayout from '../components/BaseLayout'
import List from '../components/List'
import { getListData } from '../lib/lists'
const { basePublicPath } = require('../next.config')


import styles from '../styles/team.module.css'




export async function getStaticProps() {
const listData = await getListData('team')  
return {
    props: {
      listData
    }
  }
}

function Item(entry) {
  return (
    <div className={styles.personContainer}>
    <div className={styles.imageContainer}>
      <img 
      src={`${basePublicPath}/assets/team${entry.src || "/placeholder.png"}`}
      alt={entry.name}
      />
    </div>
    <div className={styles.aboutContainer}>
      <h4><b>{entry.name}</b> | {entry.role}</h4>
      <p>{entry.description}</p>
    </div>
    </div>
    );
}

export default function Team({ listData }) {
  return (
    <BaseLayout title="Team" activeItem={2}>
    <div className="container">
    <h1>2022 Festival Team</h1>
    <List Item={Item} data={listData.data} />
    </div>
    </BaseLayout>
  )
}