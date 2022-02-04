const root = ''
module.exports = {
  trailingSlash: true,
  reactStrictMode: true,

  // Running on local
  // basePath: '',
  // assetPrefix: '',
  // basePublicPath: '',

  
  // publicRuntimeConfig: {
  //   basePublicPath: root,
  // }

  // For deploying on Github pages
  basePath: '/cmu-iff-next/out',
  assetPrefix: '/cmu-iff-next/out',
  basePublicPath: '/cmu-iff-next/out',

  // For deploying on staging site
  // basePath: '/collections/faces-2',
  // assetPrefix: '/collections/faces-2',
  // basePublicPath: '/collections/faces-2',

  // For deploying on production site
  // basePath: '/faces',
  // assetPrefix: '/faces',
  // basePublicPath: '/faces',

  // For deploying on local
  // basePath: '/Users/shannon/Desktop/cmu-iff-next/out',
  // assetPrefix: '/Users/shannon/Desktop/cmu-iff-next/out',
  // basePublicPath: '/Users/shannon/Desktop/cmu-iff-next/out',
}

// basePath: prepended to all <Link>
// assetPrefix: prepended to /_next/... CSS or JS files
// basePublicPath: since static generation can't use <Image> tags, we have to use <img> and the src doesn't get basePath appended to it so we have to force it