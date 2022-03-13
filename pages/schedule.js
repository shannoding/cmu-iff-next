import Link from 'next/link'


import BaseLayout from '../components/BaseLayout'
import List from '../components/List'
import { getListData } from '../lib/lists'
import { FilmToPages } from '../lib/films'
const { basePublicPath } = require('../next.config')


import styles from '../styles/schedule.module.css'


export async function getStaticProps() {
let listData = await FilmToPages.getAllFileData()
listData.sort((a, b) => 
  (Date.parse(a.screening_time) - Date.parse(b.screening_time)))

const filmTilesList = await getListData('film-tiles')
listData = listData.map(e => {
  const matchingTile = filmTilesList.data.find(tile => tile.filmId == e.id)
  e.poster_src = matchingTile.img_src_back
  return e
})
return {
    props: {
      listData
    }
  }
}


function Item(entry) {
  const filmDate = new Date(entry.screening_time)
  return (
    <div className={styles.filmContainer} id={entry.filmId}>
    <div className={styles.imageContainer}>
      <div className={styles.dateContainer}>
      <span>{filmDate.getMonth() == 2 ? 'MAR' : 'APR'}</span>
      <span>{filmDate.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</span>
      </div>
      <img 
      src={`${basePublicPath}/assets/index/film-tiles/${entry.poster_src}`}
      alt={`${entry.title} film poster`}
      />      
    </div>
    <div className={styles.aboutContainer}>
      <h5>{entry.title}</h5>
      <p>Time: {entry.screening_time}<br />
      Location: {entry.screening_location}</p>
      <div dangerouslySetInnerHTML={{ __html: entry.excerptHtml }}></div>
      <div>
      <Link href={`/films/${entry.id}`}><a><button className="btn btn-light">About the Film</button></a></Link>
      <Link href={`/tickets/#${entry.id}`}><a className="disabled"><button className="btn btn-light" disabled>See Tickets</button></a></Link>
      </div>
    </div>
    </div>
    );
}

export default function Schedule({ listData }) {
  return (
    <BaseLayout title="Schedule" activeItem={1}>
    <div className="container">
    <h1>2022 Festival Schedule</h1>
    <List Item={Item} data={listData} emptyText="No events announced yet..." />

    </div>
    {/*<div className="container">
    <h1>2020-2021 Festival Schedule</h1>
    <List Item={Item} data={[]} emptyText={<a href={`${basePublicPath}/previous_festivals/2021home/Schedule/schedule.html`} target="_blank" rel="noreferrer">Visit 2020-2021 Festival Schedule page</a>} />
    </div>*/}
    </BaseLayout>
  )
}
