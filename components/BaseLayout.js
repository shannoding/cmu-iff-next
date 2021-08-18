const { basePublicPath } = require('../next.config')

import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

import Nav from './Nav'
import Footer from './Footer'

export const siteTitle = 'CMU International Film Festival';

export default function BaseLayout({ children, title, activeItem }) {
  let fullPageTitle = title + ' - ' + siteTitle;
  return (
    <div>
      <Head>
        <base href={basePublicPath} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link rel="icon" href={`${basePublicPath}/favicon.png`} />
        <title>{fullPageTitle}</title>
        <meta
          name="description"
          content="TODO:"
        />
        <meta
          property="og:image"
          content={''}
        />
        <meta name="og:title" content={fullPageTitle} />
      

        <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link 
        rel="stylesheet" 
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" 
        crossOrigin="anonymous" 
        />
         
        </Head>

        <Nav activeItem={activeItem} />

        <main>{children}</main>

        <Footer activeItem={activeItem} />

        <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
        />

        <Script 
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" 
        crossOrigin="anonymous"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" 
        />

        
      </div>
  );
}

/*<link 
rel="stylesheet" 
href={`${basePublicPath}/vendors/bootstrap-4.0.0/dist/css/bootstrap.min.css`}
/>  
<Script 
src={`${basePublicPath}/vendors/bootstrap-4.0.0/dist/js/bootstrap.min.js`}
/>*/