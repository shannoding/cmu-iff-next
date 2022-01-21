import DirectoryToPages from './DirectoryToPages'

export const FilmToPages = new DirectoryToPages('content/films', 'id')

// class FilmToPages extends DirectoryToPages {
//   constructor(directoryPath, page) {
//     super(directoryPath, page)
//   }
// TODO: $sponsorBlock$
//   async getFileData(id) {
//     let fileData = super.getFileData(id)
//     fileData.sponsors.map(sponsorName => {
//       return spons
//     })
//     return 
//   }
// }