import BaseLayout from '../components/BaseLayout'
import List from '../components/List'
import { getListData } from '../lib/lists'
const { basePublicPath } = require('../next.config')


import styles from '../styles/previous_festivals.module.css'


export async function getStaticProps() {
const listData = await getListData('previous_festivals')  
return {
    props: {
      listData
    }
  }
}

function Item(entry) {
  return (
    <div className={styles.item}>
    <img src={`${basePublicPath}/assets/previous_festivals${entry.img_src}`} alt={`${entry.year} festival, ${entry.name}`} />
    <h4>{entry.year}</h4>
    <p>{entry.name}</p>
    </div>
    );
}

export default function PreviousFestivals({ listData }) {
  return (
    <BaseLayout title="Previous Festivals" activeItem={2}>
    <div className="container">
    <h1>Previous Festivals</h1>
    <List Item={Item} data={listData.data} />
    </div>
    </BaseLayout>
  )
}