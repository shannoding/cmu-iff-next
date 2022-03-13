import BaseLayout from '../../components/BaseLayout'
import FilmLayout from '../../components/FilmLayout'
import { FilmToPages } from '../../lib/films'
import List from '../../components/List'
import { getListData } from '../../lib/lists'
import { findSponsorByName } from '../sponsors'

import ReactDOMServer from 'react-dom/server';

const { basePublicPath } = require('../../next.config')

import styles from '../../styles/FilmLayout.module.css'



async function getFilmSponsorsList(sponsors) {
  const allSponsorsListData = await getListData('sponsors')  
  const sponsorsData = sponsors.map(sponsorName => {
    const sponsorData = findSponsorByName(allSponsorsListData.data, sponsorName)
    return sponsorData
  })
  return sponsorsData
}


export async function getStaticProps({ params }) {
const filmData = await FilmToPages.getFileData(params.id)
const sponsorsData = await getFilmSponsorsList(filmData.sponsors)
return {
    props: {
      filmId: params.id,
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

export default function Film({ filmId, filmData, sponsorsData }) {
  return (
    <FilmLayout {...filmData} filmId={filmId} sponsorsData={sponsorsData}>
        <div dangerouslySetInnerHTML={{ __html: filmData.contentHtml }} />
    </FilmLayout>
  )
}