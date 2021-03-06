const { basePublicPath } = require('../next.config')

import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

import Nav from './Nav'
import Footer from './Footer'

export const siteTitle = 'CMU International Film Festival';

export default function BaseLayout({ children, title, activeItem }) {
  let fullPageTitle = title + ' - ' + siteTitle
  return (
    <div>
      <Head>
        <base href={basePublicPath} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link rel="icon" href={`${basePublicPath}/favicon.png`} />
        <title>{fullPageTitle}</title>
        <meta
          name="description"
          content="Faces Behind the Mask from March 24 to April 9 seeks to explore the realities masks conceal, the facades they represent, and ways we bear them."
        />
        <meta
          property="og:image"
          content={`${basePublicPath}/assets/index/banner.png`}
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

        
        {/*<link
        rel="stylesheet"
        href={`${basePublicPath}/vendors/font-awesome/font-awesome-4.0.3.css`} 
        />
        <link
        rel="stylesheet"
        href={`${basePublicPath}/vendors/bootstrap-4.0.0/dist/css/bootstrap.css`} 
        />*/}

         
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

        {/*<script
        src={`${basePublicPath}/vendors/jquery/jquery.js`} 
        strategy="beforeInteractive"
        />
        <script
        src={`${basePublicPath}/vendors/bootstrap-4.0.0/dist/js/bootstrap.js`} 
        />*/}
        

        
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