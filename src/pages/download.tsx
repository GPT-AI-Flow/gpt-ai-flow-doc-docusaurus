import '../css/downloadPage.scss';

import Layout from '@theme/Layout';
import React from 'react';

const DownloadPage = (): JSX.Element => {
  return (
    <Layout
      title={`自媒体AI助手: 下载`}
      description="面对自媒体内容创作的挑战, GPT AI Flow 是您的最佳助手。适合新手到专业博主，我们帮您生成高质量文案、优化互动并确保内容被搜索引擎发现。加入我们，共创成功故事！"
    >
      <div className="Container" id="downloadPage">
        {/* <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div> */}

        <div className="bg-cyan-50 dark:bg-cyan-900/10 py-16">
          <div className="container m-auto space-y-8 px-6 md:px-12 lg:px-20">
            <div className="items-center justify-center gap-16 text-center md:flex md:text-left">
              <div className="order-last mb-6 space-y-6 md:mb-0 md:w-7/12 lg:w-6/12">
                <h1 className="text-4xl font-bold text-green-900 md:text-5xl dark:text-white">
                  自媒体内容生产创作 AI助理
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  天啊！用AI创作内容竟然如此简单！仅需 10 分钟，轻松完成 3 篇高品质小红书分享帖！
                </p>

                <div className="flex flex-wrap justify-center gap-4 md:justify-start lg:gap-6">
                  <a
                    href="https://github.com/GPT-AI-Flow/gpt-ai-flow-doc-docusaurus/releases/download/v0.1.39/GPT.AI.Flow-0.1.39.dmg"
                    title="Download for Mac"
                    aria-label="Download for Mac"
                    className="download-link-button"
                  >
                    <img
                      src="/img/pages/downloadPage/2023-08-18-img-2-logo-apple.png"
                      alt="icon-windows"
                      style={{ width: 24, height: 24, filter: 'invert(1)', marginRight: '0.5rem' }}
                    />
                    下载 Mac 版本
                  </a>
                  <a
                    href="https://github.com/GPT-AI-Flow/gpt-ai-flow-doc-docusaurus/releases/download/v0.1.39/GPT.AI.Flow-0.1.39-arm64.dmg"
                    title="Download for Mac"
                    aria-label="Download for Mac"
                    className="download-link-button"
                  >
                    <img
                      src="/img/pages/downloadPage/2023-08-18-img-2-logo-apple.png"
                      alt="icon-windows"
                      style={{ width: 24, height: 24, filter: 'invert(1)', marginRight: '0.5rem' }}
                    />
                    下载 Mac 版本 (M1)
                  </a>
                  <a
                    href="https://github.com/GPT-AI-Flow/gpt-ai-flow-doc-docusaurus/releases/download/v0.1.39/GPT.AI.Flow.Setup.0.1.39.exe"
                    title="Download for Windows"
                    aria-label="Download for Windows"
                    className="download-link-button"
                  >
                    <img
                      src="/img/pages/downloadPage/2023-08-18-img-1-logo-windows.png"
                      alt="icon-windows"
                      style={{ width: 24, height: 24, filter: 'invert(1)', marginRight: '0.5rem' }}
                    />
                    下载 Windows 版本
                  </a>
                </div>
                <div className="!mt-0">
                  <span className="text-md font-bold text-gray-600 dark:text-gray-300">
                    <a
                      href="https://pan.baidu.com/s/1beAxOeaMSgk-80Zh8IiDxA?pwd=flow"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                    >
                      其他下载线路(v0.1.39)
                    </a>
                  </span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  <h3>
                    <a href="https://www.app.gptaiflow.com" target="_blank" style={{ textDecoration: 'none' }}>
                      👩‍💻 网页版: 无需下载，直接使用
                    </a>
                  </h3>
                </div>
                <div className="text-sm mt-2">
                  已经有{' '}
                  <span className="text-info dark:text-secondary">
                    <b>150+</b>
                  </span>{' '}
                  用户注册使用
                </div>
                <div className="hidden flex flex-wrap justify-center gap-4 md:justify-start lg:gap-6">
                  <p className="mt-2 text-gray-500">
                    <a
                      href="/docs/proudct/registration-process"
                      className="text-gray-500 hover:text-gray-500 hover:no-underline"
                    >
                      注册安装流程
                    </a>
                  </p>
                  <p className="mt-2 text-gray-500">
                    <a
                      href="/docs/proudct/usage-and-shortcut"
                      className="text-gray-500 hover:text-gray-500 hover:no-underline"
                    >
                      使用与快捷键
                    </a>
                  </p>
                  <p className="mt-2 text-gray-500">
                    <a href="/docs/proudct/faq" className="text-gray-500 hover:text-gray-500 hover:no-underline">
                      常见问题
                    </a>
                  </p>
                </div>
              </div>
              <img
                src="/img/pages/downloadPage/2023-08-06-img-17-gpt-ai-flow-show.gif"
                // width="832"
                // height="608"
                className="m-auto md:w-5/12"
                loading="lazy"
                alt="mobility_illustration"
                style={{ borderRadius: '0.5rem' }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DownloadPage;
