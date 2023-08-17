import React from 'react';

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
                src="/img/blog/articles/2023-08-03-img-1-Ft5UoU8OqnaOqDbOQtUlhkk5Fbcv.jpeg"
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
          {/* Article 1 - end */}

          {/* Article 2 - start */}
          {/* <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">提高内容互动：数据驱动的策略</h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                数据如何指引自媒体创作者精准地定位受众，优化内容互动与用户体验？
              </p>
              <a className="inline-block" href="#" style={{ textDecoration: 'none' }}>
                <span className="text-info dark:text-blue-300">阅读全文</span>
              </a>
            </div>
          </div> */}
          {/* Article 2 - end */}

          {/* Article 3 - start */}
          {/* <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">AI在内容推荐中的深度整合</h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                详细分析AI如何在自媒体平台中进行内容推荐，以及对用户行为的深度洞察。
              </p>
              <a className="inline-block" href="#" style={{ textDecoration: 'none' }}>
                <span className="text-info dark:text-blue-300">阅读全文</span>
              </a>
            </div>
          </div> */}
          {/* Article 3 - end */}
        </div>
      </Container>
    </div>
  );
};

export default Blog;
