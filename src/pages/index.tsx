import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Stats from './astro-theme/components/Stats';
import Features from './astro-theme/components/Features';
import HeroSection from './astro-theme/components/HeroSection';
import Layout from './astro-theme/layouts/Layout';
import Testimonials from './astro-theme/components/Testimonials';
import CallToAction from './astro-theme/components/CallToAction';
import Blog from './astro-theme/components/Blog';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Welcome to Astrolus.">
      <main className="space-y-40 mb-40">
        <HeroSection />
        <Features />
        <Stats />
        <Testimonials />
        <CallToAction />
        <Blog />
      </main>
    </Layout>
  );
}
