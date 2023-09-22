import React from 'react';

import Container from './Container';

const HeroSection = () => {
  return (
    <div className="relative" id="home">
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <Container>
        <div className="relative pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
              引领<span className="text-primary dark:text-white">自媒体创作</span>的新时代: AI 助您走在前沿!
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              GPT AI Flow 专为自媒体设计，助您一键生成、优化文案，让内容产出更具吸引力、风格独特且易于被搜索。
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <a
                href="/download"
                className="get-start-button relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                style={{ textDecoration: 'none' }}
              >
                <span className="relative text-base font-semibold text-white">立即试用 GPT AI Flow</span>
              </a>
              <a
                href="/docs/intro/AI-Flow-Supercharge-Your-Self-Media-Contents"
                className="learn-more-button relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                style={{ textDecoration: 'none' }}
              >
                <span className="relative text-base font-semibold text-primary dark:text-white">
                  了解更多
                  <span style={{ display: 'none' }}>成功案例</span>
                </span>
              </a>
            </div>
            <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
              <div className="text-left p-2">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">打破创意瓶颈</h6>
                <p className="mt-2 text-gray-500">
                  无论是标题创意、文章结构还是营销文案，GPT AI
                  Flow都能为您提供即时、专业的建议，助您轻松跨越内容创作障碍。
                </p>
              </div>
              <div className="text-left p-2">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">适合所有经验层次</h6>
                <p className="mt-2 text-gray-500">
                  不论您是自媒体新手还是有丰富经验的专家，我们的AI助手都能帮您生成高质量的文案，并优化您的创作流程。
                </p>
              </div>
              <div className="text-left p-2">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">实实在在的效果</h6>
                <p className="mt-2 text-gray-500">
                  实践证明，使用 GPT AI Flow
                  可大幅提升自媒体效果。例如，“巴黎去哪玩”在小红书平台的关注数，仅在一个月内便增长了40%。您也有机会创造如此佳绩！
                </p>
              </div>
            </div>
          </div>
          <div className="hidden mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img
                src="/img/astro-theme/clients/microsoft.svg"
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img
                src={'/img/astro-theme/clients/airbnb.svg'}
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
              <img
                src="/img/astro-theme/clients/google.svg"
                className="h-9 w-auto m-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img
                src="/img/astro-theme/clients/ge.svg"
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
              <img
                src="/img/astro-theme/clients/netflix.svg"
                className="h-8 w-auto m-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img
                src="/img/astro-theme/clients/google-cloud.svg"
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
