import BaseLayout from '../components/BaseLayout'
import ArticleLayout from '../components/ArticleLayout'
import { getAllFilmIds, getFilmData } from '../lib/films'

export async function getStaticProps({ params }) {
const filmData = await getArticleData(params.film)
return {
    props: {
      filmData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllFilmIds()
  return {
    paths,
    fallback: false
  }
}

export default function Article({ articleData }) {
  return (
    <ArticleLayout {...articleData} dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}>
        <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
    </ArticleLayout>
  )
}