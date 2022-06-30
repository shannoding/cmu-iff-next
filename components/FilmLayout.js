const { basePublicPath } = require('../next.config')

import BaseLayout from './BaseLayout'
import Link from 'next/link'
import List from './List'

import styles from '../styles/FilmLayout.module.css'

function SponsorItem(sponsorData) {
	if (!sponsorData.image) {
		return <div></div>
	}
  return (
    <div className={`col-6 col-xs-6 col-sm-4 col-md-3 col-lg-6 ${styles.sponsorItem}`} key={sponsorData.name}>
    <a href={sponsorData.link} target="_blank" rel="noreferrer">
    <img src={`${basePublicPath}/assets/sponsor_logos/${sponsorData.sponsorship_level_id}/${sponsorData.image}`} />
    </a>
    </div>
      )
}

function getScreenings(props) {
	if (Array.isArray(props.screening_time)) {
		return props.screening_time.map(
			(e, i) => (<h6 key={e}>Time: {e}<br />
			Location: {props.screening_location[i]}</h6>))
	}
	return (<h6>Time: {props.screening_time}<br />
			Location: {props.screening_location}</h6>)
}

export default function FilmLayout(props) {
	return (
		<BaseLayout {...props} activeItem={1}>
		<div className={styles.filmHeader} style={{ backgroundImage: `url('${basePublicPath}/assets/films/banners${props.banner_img_src}')` }}>
            <div className="container">
            <h1>{props.title}</h1>
            <h5>Directed by {props.director}</h5>
            <p><span>Run Time: <b>{props.runTime}</b></span><span>Released: <b>{props.country}, {props.releaseYear}</b></span><span>Language: <b>{props.language}</b></span></p>
            </div>
        </div>
		<div className="container">
		<div className={styles.filmBody}>
		<article>
		{props.children}
		</article>
		<aside>
		<div>
			<section>
			<h3>Screenings {props.specialEvent ? <span className={styles.specialEventTip}>Special Event</span> : ""}</h3>
			{getScreenings(props)}
			<div dangerouslySetInnerHTML={{__html: props.excerptHtml}}></div>
			</section>

			<section>
			{props.specialEvent ? <Link href={`/special_events#${props.filmId}`}><a><button className="btn btn-light">See Special Event Description</button></a></Link> 
			: <div></div> }
			<Link href={`/schedule/#${props.filmId}`}><a><button className="btn btn-light">See in Schedule</button></a></Link>

			<Link href={`/tickets`}><a><button className="btn btn-light">See Ticket Options</button></a></Link>
		
			</section>

			<section> 
			<h3>Event Sponsors</h3>
			<div dangerouslySetInnerHTML={{__html: props.sponsors_text}}></div>
			<List Item={SponsorItem} data={props.sponsorsData} emptyText={"To be announced"} />
			</section>
		</div>
		</aside>
		</div>
		</div>
		</BaseLayout>
		);
}