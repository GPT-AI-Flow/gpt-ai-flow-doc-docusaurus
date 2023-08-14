import styles from './index.module.css';

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HeroSection from './astro-theme/components/HeroSection';
import Features from './astro-theme/components/Features';
import CallToAction from './astro-theme/components/CallToAction';
import Blog from './astro-theme/components/Blog';

// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link className="button button--secondary button--lg" to="/docs/intro">
//             立刻使用 AI 工具成为自媒体博主
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`AI 内容创作体验`} description="一块屏幕上打造极致的 AI 内容创作体验">
      {/* <HomepageHeader /> */}
      {/* <HomepageFeatures /> */}
      <main className="space-y-40 mb-40">
        <HeroSection />
        <Features />
        <CallToAction />
        <Blog />
      </main>
    </Layout>
  );
}
