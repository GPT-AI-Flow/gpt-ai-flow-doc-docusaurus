import styles from './index.module.css';

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HeroSection from './astro-theme/components/HeroSection';
import Features from './astro-theme/components/Features';
import CallToAction from './astro-theme/components/CallToAction';
import Blog from './astro-theme/components/Blog';
import Testimonials from './astro-theme/components/Testimonials';
// import Stats from './astro-theme/components/Stats';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`自媒体AI助手: 高效创作, 卓越成果!`}
      description="面对自媒体内容创作的挑战, GPT AI Flow 是您的最佳助手。适合新手到专业博主，我们帮您生成高质量文案、优化互动并确保内容被搜索引擎发现。加入我们，共创成功故事！"
    >
      <main className="space-y-40 mb-40">
        <HeroSection />
        <Testimonials />
        <Features />
        {/* <Stats /> */}
        {/* <Testimonials /> */}
        <CallToAction />
        <Blog />
      </main>
    </Layout>
  );
}
