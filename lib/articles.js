import remark from 'remark'
import html from 'remark-html'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const { basePublicPath } = require('../next.config')


const articlesDirectory = path.join(process.cwd(), 'content/articles')

// export function getSortedArticlesData() {
//   // Get file names under /content/articles
//   const fileNames = fs.readdirSync(articlesDirectory);
//   const allArticlesData = fileNames.map(fileName => {
//     // Remove ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, '')

//     // Read markdown file as string
//     const fullPath = path.join(articlesDirectory, fileName)
//     const fileContents = fs.readFileSync(fullPath, 'utf8')

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents)

//     // Combine the data with the id
//     return {
//       id,
//       ...matterResult.data
//     }
//   });
//   return allArticlesData;
// }

export function getAllArticleIds() {
  const fileNames = fs.readdirSync(articlesDirectory)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        article: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getArticleData(id, hasExcerpt = false) {
  const fullPath = path.join(articlesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents, { excerpt: hasExcerpt });

  if (hasExcerpt) {
    const matterExcerpt = matterResult.excerpt
    // TODO: Cut out the excerpt from the content
    const separatorLength = "<hr>\n".length
    const matterContent = matterResult.content.slice(matterExcerpt.length + separatorLength)

    const contentHtml = await processMatter(matterContent) 
    const excerptHtml = await processMatter(matterExcerpt)

    // Combine the data with the id, contentHtml, excerptHtml
    return {
      id,
      contentHtml,
      excerptHtml,
      ...matterResult.data
    }
  }
  else {
    const matterContent = matterResult.content

    const contentHtml = await processMatter(matterContent)

    // Combine the data with the id, contentHtml, excerptHtml
    return {
      id,
      contentHtml,
      ...matterResult.data
    }
  }

}

async function processMatter(content) {
  const processedContent = await remark()
    .use(html)
    .process(content);
  const preContentHtml = processedContent.toString();

  // Replace any $basePublicPath$ in the HTML with the actual path
  const contentHtml = preContentHtml.replace("$basePublicPath$", basePublicPath)
  return contentHtml
}