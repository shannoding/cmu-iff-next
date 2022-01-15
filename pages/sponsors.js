import Link from 'next/link'

import BaseLayout from '../components/BaseLayout'
import List from '../components/List'
import { getListData } from '../lib/lists'
const { basePublicPath } = require('../next.config')


import styles from '../styles/sponsors.module.css'


export async function getStaticProps() {
const listData = await getListData('sponsors')  
return {
    props: {
      listData
    }
  }
}

function Item(entry) {
  let columnClasses = "col-xs-12 col-sm-6 col-md-4 col-lg-3";

  if (entry.size == 2) {
    columnClasses = "col-xs-12 col-sm-12 col-md-6 col-lg-6";
  }
  else if (entry.size == 3) {
    columnClasses = "col-xs-12 col-sm-6 col-md-6 col-lg-4";
  }

  return (
      <div className={columnClasses}>
      <div className={`card ${styles.cardContainer}`}>
        <div className={styles.card}>
        <Link href={entry.data.link}><a target="_blank">
        <img src={`${basePublicPath}/assets/sponsor_logos/${entry.level_id}${entry.data.image || "/placeholder.png"}`} className={styles.cardImage} />
        <p className={styles.cardText}>{entry.data.name}</p>
        </a></Link>
        </div>
      </div>
      </div>
    );
}

function SponsorshipLevelItem(entry) {
  const sponsorshipLevelData = entry.data.map(
    (e) => { 
      return { 
        data: e, 
        level_id: entry.sponsorship_level_id,
        size: entry.size
      };
    }
  );
  return (
    <div className={styles.levelContainer}>
    <h3>{entry.sponsorship_level}</h3>
    <div className={styles.sponsorsContainer}>
    <List Item={Item} data={sponsorshipLevelData} />
    </div>
    </div>
    );
}

export default function Sponsors({ listData }) {
  return (
    <BaseLayout title="Sponsors" activeItem={1}>
    <div className="container">
    <h1>Sponsors</h1>
    <h3>Thank You!</h3>
    <p>The Carnegie Mellon International Film Festival is dedicated to the late Paul Goodman, a world-renowned filmmaker, psychologist, and CMU professor. The festival mirrors Paul's dedication to global awareness in his teaching and research, and his desire to bring to light important but often overlooked aspects of diverse individuals through filmmaking. The festival is also grateful to Denise Rousseau, Paul's wife and Professor of Organizational Behavior and Public Policy at CMU, whose gracious personal involvement has enabled the legacy of Paul Goodman to live through the festival.</p>
    <p>CMU IFF would not exist without the generous support of our sponsors, who share in our mission to bring Pittsburgh the best in contemporary world cinema and to bring films to life through food, cultural engagement and dialogue. The 2022 edition of the CMU IFF, "Faces of Home," is brought to you by:</p>
    
    <List Item={SponsorshipLevelItem} data={listData.data} />
    </div>
    </BaseLayout>
  )
}