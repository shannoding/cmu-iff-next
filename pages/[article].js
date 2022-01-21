import BaseLayout from '../components/BaseLayout'
import ArticleLayout from '../components/ArticleLayout'
import { ArticleToPages } from '../lib/articles'

export async function getStaticProps({ params }) {
const articleData = await ArticleToPages.getFileData(params.article)
return {
    props: {
      articleData
    }
  }
}

export async function getStaticPaths() {
  const paths = ArticleToPages.getAllFileIds()
  return {
    paths,
    fallback: false
  }
}

export default function Article({ articleData }) {
  return (
    <ArticleLayout {...articleData}>
        <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
    </ArticleLayout>
  )
}