import Head from 'next/head'
import BaseLayout from '../components/BaseLayout'

import Link from 'next/link'

import List from '../components/List'
import { getListData } from '../lib/lists'
const { basePublicPath } = require('../next.config')

// import getConfig from 'next/config'
// const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
// const basePublicPath = publicRuntimeConfig.basePublicPath


import styles from '../styles/home.module.css'


export async function getStaticProps() {
const filmTilesList = await getListData('film-tiles')
const teamList = await getListData('team')
const sponsorsList = await getListData('sponsors')
let flatSponsorsList = sponsorsList.data.map(
  (levelData) => {
  return levelData.data.map(s => {
    return {
      ...s,
      level_id: levelData.sponsorship_level_id
    }
  })
});
flatSponsorsList = flatSponsorsList.flat();
const actionList = {
  'data': [
    {
      'link': "/team",
      'header': "Our Team",
      'text': "Meet the faces behind the festival",
      'image': "/team-icon.svg"
    },
    {
      'link': "/schedule",
      'header': "Schedule",
      'text': "Weekly Rosters, Venues and Times",
      'image': "/schedule-icon.svg"
    },
    {
      "link": "/tickets",
      'header': "Tickets",
      "text": "Purchase your Tickets in Advance",
      'image': "/tickets-icon.svg"
    }
  ]
};
return {
    props: {
      filmTilesList,
      teamList,
      actionList,
      sponsorsList: {
        data: flatSponsorsList
      }
    }
  }
}

function CardItem(entry) {
  return (
      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
      <div className={styles.cardContainer}>
        <div className={styles.centeredCard}>
        <div>
        <img src={`${basePublicPath}/assets/icons${entry.image || "/placeholder.png"}`} className={styles.cardImage} />
        </div>
        <Link href={entry.link}><a>
        <button className="btn btn-light">{entry.header}</button>
        </a></Link>
        <p>{entry.text}</p>
        </div>
      </div>
      </div>
    );
}

function TeamItem(entry) {
  return (
    <div className="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-2">
      <div className={styles.cardContainer}>
        <div className={styles.centeredCard}>
        <img src={`${basePublicPath}/assets/team${entry.src || "/placeholder.png"}`}
        alt={entry.name} className={styles.cardImage} />
        <div className={styles.teamItemText}>
        <h6>{entry.name}</h6>
        <p>{entry.role}</p>
        </div>
        </div>
      </div>
      </div>
    );
}

function SponsorItem(entry) {
  return (
    <div className="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-2">
      <div className={styles.cardContainer}>
        <img src={`${basePublicPath}/assets/sponsor_logos/${entry.level_id}${entry.image || "/placeholder.png"}`}
        alt={entry.name} className={styles.cardImage} />
      </div>
      </div>
    );
}

function FilmTileItem(entry) {
  if (entry.special_tile) {
    return (
    <div className="col-6 col-xs-6 col-sm-6 col-md-8 col-lg-5th-x2" style={{padding:0}}>
      <div className={styles.filmContentTileItem}>
      <div>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeJ7tLkacrD2Wl7scxqRWeZysEmxJIbXbU-9pY1LXJ_uVIaLQ/viewform" target="_blank" rel="noreferrer">
      <button className="btn btn-lg btn-bg">Pre Register</button>
      </a>
      </div>
      </div>
      </div>
      )
  }
  return (
      <div className="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-5th" style={{padding:0, backgroundImage: `url('${basePublicPath}/assets/index/film-tiles/${entry.img_src_back}')` }}>
      <Link href={`/films/${entry.filmId}`}><a>
      <div className={styles.filmTileItem} 
      style={{backgroundImage: `url('${basePublicPath}/assets/index/film-tiles/${entry.img_src_front}')` }}
      onMouseEnter={(e) => { e.target.style.backgroundImage = `url('${basePublicPath}/assets/index/film-tiles/${entry.img_src_back}')` }}
      onMouseLeave={(e) => { e.target.style.backgroundImage = `url('${basePublicPath}/assets/index/film-tiles/${entry.img_src_front}')` }}
      >
      </div>
      </a></Link>
      </div>
    )
}

export default function Home({ filmTilesList, teamList, actionList, sponsorsList }) {
  return (
    <BaseLayout title="Home" activeItem={0}>
    <div className={styles.landingContainer}>
    <img src={`${basePublicPath}/assets/index/banner.png`} />
    </div>

    <div className="container" style={{padding:0}}>
      <List Item={FilmTileItem} data={filmTilesList.data} />
    </div>

    
    <div className="container">
        <List Item={CardItem} data={actionList.data} />
    </div>

    
    <div className="container">
    <h2>About the Theme</h2>
    <p>The theme for 2022's CMU International Film Festival is "Faces Behind the Masks." This year, we hope to challenge, inspire, and question our audiences on what it means to wear masks in our everyday lives, and what happens when we remove them.</p>
    <Link href="/theme"><a><button className="btn btn-light">Read more</button></a></Link>
    </div>
    {/*<div className="container">
    <h2>Short Film Competition</h2>
    <p>The CMU International Film Festival’s Short Film Competition (SFC) is an annual competition that aims to gather cinematic perspectives from around the world on a current social issue or idea. The SFC invites and encourages independent local filmmakers to submit a short film of their making that presents a unique vision, creates poignant conversation, and passionately and creatively captures the festival’s particular Faces theme.</p>
      <p><b>APPLICATION DEADLINE: TBA</b></p>
      <Link href="/sfc"><a><button className="btn btn-light">Learn more</button></a></Link>
    </div>*/}
    <div className="container">
    <h2>What do people have to say?</h2>
      <blockquote className="blockquote">
        <p className="mb-0">"The Carnegie Mellon International Film Festival is my annual favorite, due to the excellence of the choices by its director, Jolanta Lion, who deserves an Oscar in general."</p>
        <p className="blockquote-footer">Barry Paris, <i>Pittsburgh Post-Gazette</i></p>
      </blockquote>
      <blockquote className="blockquote">
        <p className="mb-0">"The CMU IFF is a full-city experience: Catch films at the university as well as various theaters across the city, while stopping along the way to sample [Pittsburgh's] global cuisine. Experience what's up and coming in student short films and take your festival experience to the next level by participating in discussions with directors, artists, academics, and other industry professionals."</p>
        <p className="blockquote-footer">Erin Prus, <i>Cincinatti Magazine</i></p>
      </blockquote>
      <blockquote className="blockquote">
        <p className="mb-0">"One of Pittsburgh's most unusual and consistently interesting film festivals..."</p>
        <p className="blockquote-footer">Michael Machosky, <i>Pittsburgh Tribune Review</i></p>
      </blockquote>
    </div>
    {/*<div className="container">
    <h2>Meet the Festival Team</h2>
    <List Item={TeamItem} data={teamList.data} />
    <Link href="/team"><a><button className="btn btn-primary">Read more</button></a></Link>
    </div>*/}
    {/*<div className="container">
    <h2>Our Sponsors</h2>
    <List Item={SponsorItem} data={sponsorsList.data} />
    <Link href="/sponsors"><a><button className="btn btn-primary">Learn more</button></a></Link>
    </div>*/}
    </BaseLayout>
  );
}
