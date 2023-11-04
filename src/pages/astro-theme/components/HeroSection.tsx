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
              🚀 <span className="text-primary dark:text-white">个人自媒体加速器</span>: 让AI成为您内容实现的翅膀
            </h1>

            <p className="mt-8 text-gray-700 dark:text-gray-300">
              📝 从灵感到实施，从笔记到成品——您的数字化伙伴，让每一步都更高效。
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <a
                href="/download"
                className="get-start-button relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                style={{ textDecoration: 'none' }}
              >
                <span className="relative text-base font-semibold text-white">立即试用</span>
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
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">创意无止境 🖋️ </h6>
                <p className="mt-2 text-gray-500">
                  无论是独特的标题、文章布局或是有吸引力的营销文案，创意加速器都能为您提供精准的建议，让每个创意得以完美呈现。
                </p>
              </div>
              <div className="text-left p-2">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">每位创作者的首选 🌟</h6>
                <p className="mt-2 text-gray-500">
                  从刚入门的新手到经验丰富的大咖，创意加速器都能助您轻松制定和完善高水平的内容。
                </p>
              </div>
              <div className="text-left p-2">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">见证真实转变 🦋</h6>
                <p className="mt-2 text-gray-500">
                  众多使用者都已经感受到了创意加速器带来的变革。就像“巴黎去哪玩”在短短一个月里在小红书上的关注度增长了
                  40%那样，您也能实现出类拔萃的成绩！
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
