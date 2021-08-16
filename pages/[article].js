import BaseLayout from '../components/BaseLayout'
import ArticleLayout from '../components/ArticleLayout'
import { getAllArticleIds, getArticleData } from '../lib/articles'

export async function getStaticProps({ params }) {
const articleData = await getArticleData(params.article)  
return {
    props: {
      articleData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllArticleIds()
  return {
    paths,
    fallback: false
  }
}

export default function Article({ articleData }) {
  console.log(articleData);
  return (
    <ArticleLayout {...articleData} dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}>
        <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
    </ArticleLayout>
  )
}