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
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <div className={styles.item}>
    <a href={`${basePublicPath}/previous_festivals${entry.link}/index.html`} target="_blank" rel="noreferrer">
    <img src={`${basePublicPath}/assets/previous_festivals${entry.img_src}`} alt={`${entry.year} festival, ${entry.name}`} />
    <h4>{entry.year}</h4>
    </a>
    <p>{entry.name}</p>
    </div>
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