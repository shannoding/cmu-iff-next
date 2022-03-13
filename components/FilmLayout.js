const { basePublicPath } = require('../next.config')

import BaseLayout from './BaseLayout'
import Link from 'next/link'
import List from './List'

import styles from '../styles/FilmLayout.module.css'

function SponsorItem(sponsorData) {
  return (
    <div className={`col-6 col-xs-6 col-sm-4 col-md-3 col-lg-6 ${styles.sponsorItem}`} key={sponsorData.name}>
    <a href={sponsorData.link} target="_blank" rel="noreferrer">
    <img src={`${basePublicPath}/assets/sponsor_logos/${sponsorData.sponsorship_level_id}${sponsorData.image}`} />
    </a>
    </div>
      )
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
			<h3>Screenings</h3>
			<p>Time: {props.screening_time}<br />
			Location: {props.screening_location}</p>
			<div dangerouslySetInnerHTML={{__html: props.excerptHtml}}></div>
			</section>

			<section>
			<Link href={`/tickets/#${props.filmId}`}><a><button className="btn btn-light">See Tickets</button></a></Link>
			</section>

			<section> 
			<h3>Event Sponsors</h3>
			<List Item={SponsorItem} data={props.sponsorsData} emptyText={"To be announced"} />
			</section>
		</div>
		</aside>
		</div>
		</div>
		</BaseLayout>
		);
}