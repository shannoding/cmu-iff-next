const { basePublicPath } = require('../next.config')

import BaseLayout from './BaseLayout'

import styles from '../styles/ArticleLayout.module.css'


export default function ArticleLayout(props) {
	return (
		<BaseLayout {...props}>
		<div className="container">
		<div className={styles.article}>
		{props.children}
		</div>
		</div>
		</BaseLayout>
		);
}