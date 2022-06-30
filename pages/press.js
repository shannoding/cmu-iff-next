import BaseLayout from '../components/BaseLayout'
import List from '../components/List'
import Link from 'next/link'
import { getListData } from '../lib/lists'
const { basePublicPath } = require('../next.config')


import styles from '../styles/press.module.css'




export async function getStaticProps() {
const listData = await getListData('press')  
return {
    props: {
      listData
    }
  }
}

function Item(entry) {
  return (
    <div className={styles.newsContainer}>
    <div className={styles.imageContainer}>
      <img 
      src={`${basePublicPath}/assets/press/${entry.image || "/placeholder.png"}`}
      alt={entry.title}
      />
    </div>
    <div className={styles.aboutContainer}>
      <h5>{entry.title}</h5>
      <h6 className={styles.sourceText}>{entry.source}</h6>
      <p>{entry.description}</p>
      <Link href={entry.url}><a target="_blank" rel="noreferrer"><button className="btn btn-light">Read More 🡕</button></a></Link>

    </div>
    </div>
    );
}

export default function Press({ listData }) {
  return (
    <BaseLayout title="Press" activeItem={1}>
    <div className="container">
    <h1>Festival in the Press</h1>
    <List Item={Item} data={listData.data} />
    </div>
    </BaseLayout>
  )
}