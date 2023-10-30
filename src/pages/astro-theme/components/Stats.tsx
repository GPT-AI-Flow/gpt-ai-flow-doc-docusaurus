import React from 'react';

import Container from './Container';

const Stats = () => {
  return (
    <div id="solution">
      <Container>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-sky-500"
        >
          <path
            fillRule="evenodd"
            d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
            clipRule="evenodd"
          />
        </svg>

        <div className="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
          <div className="md:5/12 lg:w-1/2">
            {/* <img src="/img/astro-theme/pie.svg" alt="image" loading="lazy" width="" height="" className="w-full" /> */}
            <img
              src="/img/pages/homePage/2023-10-17-img-3-homePage-two-feature-presentation.gif"
              alt="image"
              loading="lazy"
              width=""
              height=""
              className="w-full rounded-lg shadow-xl"
            />
          </div>
          <div className="md:7/12 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              AI自媒体运营助手与个人文档助手, 重新定义您的创作和组织方式！
            </h2>
            <p className="my-8 text-gray-600 dark:text-gray-300">
              在这个数字化快速发展的时代, 我们推出了两款颠覆性的 AI 工具, 它们结合了尖端技术与用户友好的设计,
              旨在彻底改变您的工作方式和效率。
              <br />
              <br />
              自媒体运营助手利用 AI 的力量, 为您生成各种自媒体文本, 满足专业发布的需要。
              个人文档助手则通过整合您的笔记和内容, 用 AI 的智能为您构建一个高效、私人定制的知识问答系统。
              <br />
              <br />
              这两款工具都旨在让您的生活更加有序, 工作更加高效, 思维更加清晰:
            </p>
            <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
              <div className="mt-8 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="w-5/6">
                  <h3 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">自媒体运营助手</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    让我们的 AI 自媒体运营助手成为您数字内容创作的得力助手, 释放无限创意, 轻松驾驭自媒体世界！
                  </p>
                </div>
              </div>
              <div className="pt-4 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex justify-center items-center gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg> */}
                  <img
                    src="/img/pages/homePage/2023-10-17-img-2-doc-assitant.png"
                    alt=""
                    style={{ width: 24, height: 24 }}
                  />
                </div>
                <div className="w-5/6">
                  <h3 className="font-semibold text-lg text-gray-700 dark:text-teal-300">个性化本地文档助手</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    借助本地文档助手,
                    快速定位关键信息，无需翻阅堆积如山的文件。提问即得答案，智能查询让文档检索变得简单高效。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Stats;
