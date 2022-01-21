import remark from 'remark'
import html from 'remark-html'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const { basePublicPath } = require('../next.config')

// Turns a directory of .md files into matchable pages by providing helper functions to get a list of all possible page names and extract the data of each match

export default class DirectoryToPages {
	constructor(directoryPath, page) {
		this.directory = path.join(process.cwd(), directoryPath)
		this.page = page
	}


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

	getAllFileIdStrings() {
		const fileNames = fs.readdirSync(this.directory)
		return fileNames.map(fileName => fileName.replace(/\.md$/, ''))
	}
	
	getAllFileData() {
		let fileIdStrings = this.getAllFileIdStrings()

		fileIdStrings.map(fileId => {
			return this.getFileData(fileId)
		})
	}

	getAllFileIds() {
		const fileIdStrings = this.getAllFileIdStrings()
		return fileIdStrings.map(fileId => {
			return {
				params: {
					[this.page]: fileId
				}
			}
		})
	}

	async getFileData(id) {
	  const fullPath = path.join(this.directory, `${id}.md`);
	  const fileContents = fs.readFileSync(fullPath, 'utf8');

	  // Use gray-matter to parse the post metadata section
	  const matterResult = matter(fileContents, { excerpt: true });

	  if (matterResult.data.hasExcerpt) {
	    const matterExcerpt = matterResult.excerpt
	    const separatorLength = "<hr>\n".length
	    const matterContent = matterResult.content.slice(matterExcerpt.length + separatorLength)

	    const contentHtml = await this.processMatter(matterContent) 
	    const excerptHtml = await this.processMatter(matterExcerpt)

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

	    const contentHtml = await this.processMatter(matterContent)

	    // Combine the data with the id, contentHtml, excerptHtml
	    return {
	      id,
	      contentHtml,
	      ...matterResult.data
	    }
	  }

	}

	async processMatter(content) {
	  const processedContent = await remark()
	    .use(html)
	    .process(content);
	  const preContentHtml = processedContent.toString();

	  // Replace any $basePublicPath$ in the HTML with the actual path
	  const contentHtml = preContentHtml.replaceAll("$basePublicPath$", basePublicPath)	  
	  return contentHtml
	}
}