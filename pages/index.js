import Head from 'next/head'
import BaseLayout from '../components/BaseLayout'

import Link from 'next/link'

import List from '../components/List'
import { getListData } from '../lib/lists'
import { HoverImageBox } from '../components/HoverBox'
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
      'text': "Meet the Faces Behind the Festival",
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
    // col-6 col-xs-6 col-sm-6 col-md-8 col-lg-5th-x2
    
  // {
  //   "name": "Pre Register",
  //   "filmId": "",
  //   "img_src_front": "",
  //   "img_src_back": "",
  //   "special_tile": true
  // }
    return (
    <div className="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-5th" style={{padding:0}}>
      <div className={styles.filmContentTileItem}>
      <div>
      <Link href="/schedule"><a>
      <button style={{margin:0}} className="btn btn-lg btn-bg">Festival Schedule</button>
      </a></Link>
      </div>
      </div>
      </div>
      )
  }
  return (
      <div className="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-5th" style={{padding:0, backgroundImage: `url('${basePublicPath}/assets/index/film-tiles/${entry.img_src_back}')` }}>
      <Link href={`/films/${entry.filmId}`}><a>
      <HoverImageBox className={styles.filmTileItem}
      img_src_front={`${basePublicPath}/assets/index/film-tiles-sm/${entry.img_src_front}`}
      img_src_back={`${basePublicPath}/assets/index/film-tiles/${entry.img_src_back}`} 
      />
      </a></Link>
      </div>
    )
}

export default function Home({ filmTilesList, teamList, actionList, sponsorsList }) {
  return (
    <BaseLayout title="Home" activeItem={0}>
    <div className={styles.landingContainer}>
    <picture>
    <source media="(min-width:768px)" srcSet={`${basePublicPath}/assets/index/banner.png`} />
    <img src={`${basePublicPath}/assets/index/banner-sm.png`} />
    </picture>
    </div>
    <div className="container">
    <h5>Organized by the <Link href="https://www.cmu.edu/dietrich/humanities-center/"><a style={{textDecoration:"underline"}} target="_blank">Humanities Center</a></Link>.</h5>
    </div>

    {/*<div className="container" style={{padding:0}}>
      <List Item={FilmTileItem} data={filmTilesList.data} />
    </div>*/}

    {/* ^ this is the tile grid of films for the homepage - Anika*/}

    <a href="cmuiff.com">VISIT OUR NEW WEBSITE!</a>

    <div className = "container" style={{padding:0}}>
      <img src="asianfilm_graphic.png" height= "700px"></img>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfn1AZvGcL7dMyN2Yo9EsKmxfViGoT17YonS0jefUJy1KTeKQ/viewform"><br></br>Click here to register</a>
      
      <p><br></br><br></br>Join us for a special night of short films by Asian filmmakers followed by a keynote presentation from Milky Tran. The first 50 people to arrive get free boba! Co-presented by the CMU International Film Festival, aKDPhi, Project Smile, and Big Straw Magazine.
      <br></br><br></br>
The selection of films include:
<br></br><br></br>
FIRST TIMERS by Jee Hoon Seo
An advanced surfer encounters a beginner surfer struggling on his first session and is reminded of his own beginnings.
<br></br>
<br></br>
DE CLOSIN NIGHT by Shicong Zhu & Ella Rouwen Chen
A Chinese theater student tries to get rid of her accent in order to land a college performance. But as she tries harder, the line between the skill set.
and her self-identity gets blurred.
<br></br>
<br></br>
WALINONG SARI by Eugene Foo & Honey Ahmad
A warrior princess of Inderapura has to choose between a kingdom that comes with a strategic marriage or, to follow her heart for a life of adventure with a man who truly understands her.
<br></br>
<br></br>
OINK by Milky Tran
A story about unconditional admiration and how mothers can unconsciously pass on their own unhealthy habits and insecurities to their daughters.
</p>
    </div>

    <div className="container">
        <List Item={CardItem} data={actionList.data} />
    </div>

    <div className="container">
    <iframe width="699" height="393" src="https://www.youtube.com/embed/49cM5EivEQc" title="CMU IFF 2016 Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    {/*<div className="container">
    <h2>About the Theme</h2>
    <p>The theme for 2022's CMU International Film Festival is "Faces Behind the Masks." This year, we hope to challenge, inspire, and question our audiences on what it means to wear masks in our everyday lives, and what happens when we remove them.</p>
    <Link href="/theme"><a><button className="btn btn-light">Read more</button></a></Link>
    </div>
    <div className="container">
    <iframe src="https://player.vimeo.com/video/691391659?h=4bc8a4d845" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>

    </div>
    <div className="container">
    <h2>CMU COVID Guidelines</h2>
    <p>Well-fitted facial coverings are required to be worn indoors on CMU campus for the first week of the festival. From the second week on, the CMU requirement will be lifted and facial coverings will be optional for fully-vaccinated guests. <Link href="https://tinyurl.com/49jspfu2"><a target="_blank">Find out more information regarding CMU COVID guidelines.</a></Link></p>
    
    </div>*/}
    {/*<div className="container">
    <h2>Short Film Competition</h2>
    <p>The CMU International Film Festival’s Short Film Competition (SFC) is an annual competition that aims to gather cinematic perspectives from around the world on a current social issue or idea. The SFC invites and encourages independent local filmmakers to submit a short film of their making that presents a unique vision, creates poignant conversation, and passionately and creatively captures the festival’s particular Faces theme.</p>
      <p><b>APPLICATION DEADLINE: TBA</b></p>
      <Link href="/sfc"><a><button className="btn btn-light">Learn more</button></a></Link>
    </div>*/}
    {/*<div className="container">
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
    </div>*/}
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
