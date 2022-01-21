import '../styles/globals.css'
import '../styles/nav.css'
import '../styles/footer.css'

import Head from 'next/head'

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import '../styles/nprogress.css'; //styles of nprogress

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());  


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp
