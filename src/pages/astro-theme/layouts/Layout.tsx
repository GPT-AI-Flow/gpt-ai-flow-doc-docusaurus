import './Layout.css';
import '../buttons.scss';

import React from 'react';
import Head from '@docusaurus/Head';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

// import AppFooter from '../components/AppFooter.astro';
// import AppHeader from '../components/AppHeader.tsx';

const Layout = (props: any) => {
  return (
    <>
      <Head>
        <html lang="zh" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        {/* <meta name="generator" content={Astro.generator} /> */}
        <meta name="description" content="Template built with tailwindcss using Tailus blocks v2" />
        <title>Tailus astro theme</title>

        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-white dark:bg-gray-900">
        <AppHeader />
        {props.children}
        <AppFooter />
      </body>
    </>
  );
};

export default Layout;
