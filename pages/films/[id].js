import BaseLayout from '../../components/BaseLayout'
import FilmLayout from '../../components/FilmLayout'
import { FilmToPages } from '../../lib/films'
import { getListData } from '../../lib/lists'
import { findSponsorByName } from '../sponsors'

import ReactDOMServer from 'react-dom/server';

const { basePublicPath } = require('../../next.config')

import styles from '../../styles/FilmLayout.module.css'


async function getFilmSponsorsContent(sponsors) {
  const sponsorsListData = await getListData('sponsors')  
  const contentList = sponsors.map(sponsorName => {
    const sponsorData = findSponsorByName(sponsorsListData.data, sponsorName)
    if (sponsorData) {
      return (
      <div className="col-xs-12 col-sm-4 col-md-3 col-lg-6" key={sponsorName}>
      <a href={sponsorData.link} target="_blank" rel="noreferrer">
      <img src={`${basePublicPath}/assets/sponsor_logos/${sponsorData.sponsorship_level_id}${sponsorData.image}`} />
      </a>
      </div>
        )
    }
  })
  const content = (
  <div className={`row ${styles.sponsorsBox}`}>
  {contentList}
  </div>
    )
  return ReactDOMServer.renderToStaticMarkup(content)
}

export async function getStaticProps({ params }) {
const filmData = await FilmToPages.getFileData(params.id)
const sponsorsData = await getFilmSponsorsContent(filmData.sponsors)
return {
    props: {
      filmData,
      sponsorsData
    }
  }
}

export async function getStaticPaths() {
  const paths = FilmToPages.getAllFileIds()
  return {
    paths,
    fallback: false
  }
}

export default function Film({ filmData, sponsorsData }) {
  let contentHtml = filmData.contentHtml.replaceAll('$sponsorsBox$', sponsorsData)
  return (
    <FilmLayout {...filmData}>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </FilmLayout>
  )
}