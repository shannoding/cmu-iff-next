const { basePublicPath } = require('../next.config')

import BaseLayout from './BaseLayout'

import styles from '../styles/FilmLayout.module.css'


export default function FilmLayout(props) {
	return (
		<BaseLayout {...props}>
		<div className="container">
		<div>
		{props.children}
		</div>
		</div>
		</BaseLayout>
		);
}