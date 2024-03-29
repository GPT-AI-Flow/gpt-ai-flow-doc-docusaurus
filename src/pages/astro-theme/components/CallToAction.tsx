import React from 'react';

import Container from './Container';

const CallToAction = () => {
  return (
    <div className="relative py-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <Container>
        <div className="relative">
          <div className="flex items-center justify-center -space-x-2">
            <img
              loading="lazy"
              width="400"
              height="400"
              src="/img/avatars/2023-09-18-img-7-avatar-a76c7df6d208b595b7d357a5dddf6df6e3ee30f5.jpg@160w_160h_1c_1s_!web-avatar-comment.avif"
              alt="member photo"
              className="h-8 w-8 rounded-full object-cover"
            />
            <img
              loading="lazy"
              width="200"
              height="200"
              src="/img/avatars/2023-09-18-img-10-avatar-357259270d8e9c76789836c3a5e2041ca1e40cd3.jpg@160w_160h_1c_1s_!web-avatar-comment.avif"
              alt="member photo"
              className="h-12 w-12 rounded-full object-cover"
            />
            <img
              loading="lazy"
              width="200"
              height="200"
              src="/img/avatars/2023-09-18-img-8-avatar-76c4534d6b7c7cc1d3c0c467d8f2eaa11c11bb9d.jpg@160w_160h_1c_1s_!web-avatar-comment.avif"
              alt="member photo"
              className="z-10 h-16 w-16 rounded-full object-cover"
            />
            <img
              loading="lazy"
              width="200"
              height="200"
              src="/img/avatars/2023-09-18-img-11-avatar-aa6096828a41f7504cdf398a49867ece2014e6e4.jpg@160w_160h_1c_1s_!web-avatar-comment.avif"
              alt="member photo"
              className="relative h-12 w-12 rounded-full object-cover"
            />
            <img
              loading="lazy"
              width="200"
              height="200"
              src="/img/avatars/2023-09-18-img-9-avatar-2a5258cf89f3e6b885691ca92d773d6483bb5084.jpg@160w_160h_1c_1s_!web-avatar-comment.avif"
              alt="member photo"
              className="h-8 w-8 rounded-full object-cover"
            />
          </div>
          <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
            <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
              提升您的内容制作水平
            </h1>
            <p className="text-center text-xl text-gray-600 dark:text-gray-300">
              加入全球的创作者，使用我们的AI工具轻松地创作出引人入胜的内容。
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="/download"
                className="get-start-button relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                style={{ textDecoration: 'none' }}
              >
                <span className="relative text-base font-semibold text-white dark:text-dark">开始创作</span>
              </a>
              <a
                href="/docs/intro/how-professional-mode-of-ai-flow-revolutionizes-content-creation"
                className="learn-more-button relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                style={{ textDecoration: 'none' }}
              >
                <span className="relative text-base font-semibold text-primary dark:text-white">探索功能</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CallToAction;
