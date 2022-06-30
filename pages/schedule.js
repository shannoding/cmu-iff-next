import Link from 'next/link'


import BaseLayout from '../components/BaseLayout'
import List from '../components/List'
import { getListData } from '../lib/lists'
import { FilmToPages } from '../lib/films'
import ShowMoreBox from '../components/ShowMoreBox'

const { basePublicPath } = require('../next.config')


import styles from '../styles/schedule.module.css'


export async function getStaticProps() {
let listData = await FilmToPages.getAllFileData()
listData = listData.map(e => {
  delete e.contentHtml
  return e
})
let scheduleListData = []
for (let filmFile of listData) {
  if (Array.isArray(filmFile.screening_time)) {
    const screening_times = filmFile.screening_time
    const screening_locations = filmFile.screening_location
    for (let i = 0; i < screening_times.length; i++) {
      let copyFilmFile = { ...filmFile }
      copyFilmFile.screening_time = screening_times[i]
      copyFilmFile.screening_location = screening_locations[i]
      scheduleListData.push(copyFilmFile)
    }
  }
  else {
    scheduleListData.push(filmFile)
  }
}
scheduleListData.sort((a, b) => 
  (Date.parse(a.screening_time) - Date.parse(b.screening_time)))

const filmTilesList = await getListData('film-tiles')
scheduleListData = scheduleListData.map(e => {
  const matchingTile = filmTilesList.data.find(tile => tile.filmId == e.id)
  e.poster_src = matchingTile ? matchingTile.img_src_back : "placeholder.png"
  return e
})
return {
    props: {
      scheduleListData
    }
  }
}


function Item(entry) {
  const filmDate = new Date(entry.screening_time)
  return (
    <ShowMoreBox switch={true}>
    <div className={styles.filmContainer} id={entry.id}>
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
      <h5>{entry.title} {entry.specialEvent ? <span className={styles.specialEventTip}>Special Event</span> : ""}</h5>
      <h6>Time: {entry.screening_time}<br />
      Location: {entry.screening_location}</h6>
      
      <div dangerouslySetInnerHTML={{ __html: entry.excerptHtml }}></div>
      <div>
      <hr />
      <Link href={`/films/${entry.id}`}><a><button className="btn btn-light">About the Film</button></a></Link>
      {entry.specialEvent ? <Link href={`/special_events#${entry.id}`}><a><button className="btn btn-light">See Special Event Description</button></a></Link> : "" }
      <Link href={`/tickets`}><a><button className="btn btn-light">See Ticket Options</button></a></Link>
      </div>
    </div>
    </div>
    <div className={styles.filmContainerSmall} id={entry.id}>
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
      <h5>{entry.title} {entry.specialEvent ? <span className={styles.specialEventTip}>Special Event</span> : ""}</h5>
      <h6>Time: {entry.screening_time}<br />
      Location: {entry.screening_location}</h6>
    </div>
    </div>
    </ShowMoreBox>
    );
}

export default function Schedule({ scheduleListData }) {
  return (
    <BaseLayout title="Schedule" activeItem={1}>
    <div className="container">
    <h1>2022 Festival Schedule</h1>

    <h2>Upcoming</h2>
    <List Item={Item} data={scheduleListData.filter(a => new Date(a.screening_time) >= new Date() )} emptyText="No events found..." />

    <h2>Past</h2>
    <List Item={Item} data={scheduleListData.filter(a => new Date(a.screening_time) < new Date() )} emptyText="No events found..." />

    </div>
    {/*<div className="container">
    <h1>2020-2021 Festival Schedule</h1>
    <List Item={Item} data={[]} emptyText={<a href={`${basePublicPath}/previous_festivals/2021home/Schedule/schedule.html`} target="_blank" rel="noreferrer">Visit 2020-2021 Festival Schedule page</a>} />
    </div>*/}
    </BaseLayout>
  )
}
