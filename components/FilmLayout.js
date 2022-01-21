const { basePublicPath } = require('../next.config')

import BaseLayout from './BaseLayout'

import styles from '../styles/FilmLayout.module.css'


export default function FilmLayout(props) {
	return (
		<BaseLayout {...props} activeItem={1}>
		<div className={styles.filmHeader} style={{ backgroundImage: `url('${basePublicPath}/assets/films/headers${props.img_src}')` }}>
            <div className="container">
            <h1>{props.title}</h1>
            <h4>Directed by {props.director}</h4>
            <h4>{props.releaseYear} | {props.runTime} | {props.language}</h4>
            </div>
        </div>
		<div className="container">
		<div className={styles.filmBody}>
		{props.children}
		</div>
		</div>
		</BaseLayout>
		);
}