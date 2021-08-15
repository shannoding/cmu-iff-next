import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

import Nav from './Nav'
import Footer from './Footer'


export const siteTitle = 'CMU International Film Festival'

export default function BaseLayout({ children, pageTitle, activeItem }) {
  let fullPageTitle = pageTitle + ' - ' + siteTitle;
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link rel="icon" href="/favicon.png" />
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
        href="/vendors/bootstrap-4.0.0/dist/css/bootstrap.min.css"
        />      

        </Head>

        <Nav pageTitle={pageTitle} activeItem={activeItem} />

        <main>{children}</main>

        <Footer pageTitle={pageTitle} />

        <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossOrigin="anonymous" 
        />
        <Script 
        src="/vendors/bootstrap-4.0.0/dist/js/bootstrap.min.js"
        />

      </div>
  );
}