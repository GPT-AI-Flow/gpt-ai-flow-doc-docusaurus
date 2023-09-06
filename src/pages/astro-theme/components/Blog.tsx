import React from 'react';

// @ts-ignore
import firstArticleImg from '../../../../blog/2023-05-13-AI如何改变我们的生活: OpenAI插件的力量/img/2023-05-13-intro-OpenAI-Plugin.jpg';
// @ts-ignore
import secondArticleImg from '../../../../blog/2023-08-11-塑造超级个体/img/2023-08-03-img-1-Ft5UoU8OqnaOqDbOQtUlhkk5Fbcv.jpeg';
// @ts-ignore
import thirdArticleImg from '../../../../blog/2023-09-06-让自媒体博主梦想成真的神奇工具/img/2023-09-06-img-1-intro.png';

import Container from './Container';

const Blog = () => {
  return (
    <div id="blog">
      <Container>
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">最新洞见</h2>
          <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
            探索自媒体领域与 AI 结合的前沿思考和技术趋势，为您的内容制作提供深入的启示。
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Article 1 - start */}
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={firstArticleImg.src}
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                AI 如何改变我们的生活：OpenAI 插件的力量 | AI 在生活中的应用和未来展望
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                探索OpenAI插件如何改变我们的生活。了解Coupert、Giftwrap、Redfin等AI插件的功能和用途，以及AI在我们日常生活中的应用和未来展望。
              </p>
              <a
                className="inline-block"
                href="/blog/ai-changing-our-lives-openai-plugins"
                style={{ textDecoration: 'none' }}
              >
                <span className="text-info dark:text-blue-300">阅读全文</span>
              </a>
            </div>
          </div>

          {/* Article 1 - end */}

          {/* Article 2 - start */}
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={secondArticleImg.src}
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                超级个体：探索 AIGC 与人类合作的无限可能
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                本文深入探索了AIGC与人类合作的无限可能性，阐述了这种合作如何能塑造出超级个体。我们的讨论涵盖了AIGC的工作原理，以及它如何通过增强个体的能力和效率来改变我们的生活和工作方式。
              </p>
              <a
                className="inline-block"
                href="/blog/exploring-unlimited-possibilities-of-aigc-collaboration-shaping-super-individuals"
                style={{ textDecoration: 'none' }}
              >
                <span className="text-info dark:text-blue-300">阅读全文</span>
              </a>
            </div>
          </div>
          {/* Article 2 - end */}

          {/* Article 3 - start */}
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={thirdArticleImg.src}
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                GPT AI Flow: 博主及内容创作者的神奇工具
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                专为一人自媒体博主和自媒体新手，甚至想做内容创作的企业家们量身打造的神奇人工智能工具 - GPT AI
                Flow。它能帮助您快速生成和优化文案, 为您的自媒体与宣传事业提供强大支持。
              </p>
              <a
                className="inline-block"
                href="/blog/AI-Flow-magic-tool-for-bloggers-and-creators"
                style={{ textDecoration: 'none' }}
              >
                <span className="text-info dark:text-blue-300">阅读全文</span>
              </a>
            </div>
          </div>
          {/* Article 3 - end */}
        </div>
      </Container>
    </div>
  );
};

export default Blog;
