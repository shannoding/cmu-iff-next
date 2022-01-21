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
      'link': "/tickets",
      'header': "Buy Tickets",
      'text': "Purchase film tickets in advance",
      'image': "/redTicket.png"
    },
    {
      'link': "/schedule",
      'header': "Schedule",
      'text': "Check our weekly film rosters",
      'image': "/redSchedule.png"
    },
    {
      "link": "/sponsor",
      'header': "Sponsor Us",
      "text": "See your brand on the silver screen",
      'image': "/redHands.png"
    }
  ]
};
return {
    props: {
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
        <Link href={entry.link}><a>
        <img src={`${basePublicPath}/assets/index${entry.image || "/placeholder.png"}`} className={styles.cardImage} />
        <h5>{entry.header}</h5>
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

export default function Home({ teamList, actionList, sponsorsList }) {
  return (
    <BaseLayout title="Home" activeItem={1}>
    <div className={styles.landingContainer}>
    <div className="container">
    <div className={styles.landingImage}>
      <div className={styles.landingHeaders}>
      <h1>2022 Festival</h1>
      <h2>Stay tuned...</h2>
      </div>
      <div className={styles.landingIcon}>
        <img src={`${basePublicPath}/assets/index/Faces_of_Home_face-nobg.png`} />
      </div>
    </div>
    </div>
    </div>

    <div className="container">
        <List Item={CardItem} data={actionList.data} />
    </div>
    <div className="container">
    <h2>Pittsburgh Film Festival Series</h2>
    <p>The 2020 year proved to be unprecedented in every way, and the CMUIFF embraced its unconventional nature with open arms. The festival quickly transitioned from an entirely in-person experience to a virtual experience, engaging audiences across the globe with film and discussion in a digital forum.</p>

    <p>This year, as we are better able to maneuver the pandemic and the IFF team’s options expand, we hope to offer audiences the well-loved in-person format once again. We are ecstatic to see audiences together, experiencing film and what it has to offer as a group. Moving beyond the limitations of a virtual format is one of the most exciting parts of this year’s film festival, and hosting events at different Pittsburgh venues allows our team to engage with local businesses and cultural communities around the city. We are clear in our mission to bring both film lovers and the Pittsburgh community together to appreciate film and to foster our own cultural city life.</p>

    <p>Preparations are already underway and the IFF team is excited to reveal the theme for this year soon! Stay tuned… </p>

    </div>
    <div className="container">
    <h2>About the Theme</h2>
    <p>The theme for 2022's CMU International Film Festival is "Faces Behind the Masks." This year, we hope to challenge, inspire, and question our audiences on what it means to wear masks in our everyday lives, and what happens when we remove them.</p>
    <Link href="/theme"><a><button className="btn btn-primary">Read more</button></a></Link>
    </div>
    <div className="container">
    <h2>Short Film Competition</h2>
    <p>The CMU International Film Festival’s Short Film Competition (SFC) is an annual competition that aims to gather cinematic perspectives from around the world on a current social issue or idea. The SFC invites and encourages independent local filmmakers to submit a short film of their making that presents a unique vision, creates poignant conversation, and passionately and creatively captures the festival’s particular Faces theme.</p>
      <p><b>APPLICATION DEADLINE: TBA</b></p>
      <Link href="/sfc"><a><button className="btn btn-primary">Learn more</button></a></Link>
    </div>
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
    <div className="container">
    <h2>Meet the Festival Team</h2>
    <List Item={TeamItem} data={teamList.data} />
    <Link href="/team"><a><button className="btn btn-primary">Read more</button></a></Link>
    </div>
    <div className="container">
    <h2>Our Sponsors</h2>
    <List Item={SponsorItem} data={sponsorsList.data} />
    <Link href="/sponsors"><a><button className="btn btn-primary">Learn more</button></a></Link>
    </div>
    </BaseLayout>
  );
}
