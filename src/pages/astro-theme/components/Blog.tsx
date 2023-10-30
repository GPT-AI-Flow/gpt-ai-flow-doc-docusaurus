import React from 'react';

// @ts-ignore
import firstArticleImg from '../../../../blog/2023-09-19-18h00-职场必备：如何精准选择AI公文写作软件以提升工作效率和质量/img/2023-09-19-img-1-pexels-lisa-fotios-851213.jpg';
// @ts-ignore
import secondArticleImg from '../../../../blog/2023-08-11-塑造超级个体/img/2023-08-03-img-1-Ft5UoU8OqnaOqDbOQtUlhkk5Fbcv.jpeg';
// @ts-ignore
import thirdArticleImg from '../../../../blog/2023-09-19-18h30-怎么利用AI赚钱,有哪些渠道/img/2023-09-19-img-5-pexels-geri-tech-5678243.jpg';

import Container from './Container';

interface IArticle {
  title: string;
  img: string;
  description: string;
  openUrl: string;
}

const Blog = () => {
  const articles = [
    {
      title: '职场必备：如何精准选择AI公文写作软件以提升工作效率和质量？',
      img: firstArticleImg.src,
      description:
        '了解如何精准选择AI公文写作软件以提高职场效率和写作质量。本文详解AI公文写作软件的主要优点，以及如何根据功能性与性能、用户评价和优质服务选择合适的产品。',
      openUrl: '/blog/how-to-choose-AI-document-writing-software-effectively',
    },
    {
      title: '超级个体：探索 AIGC 与人类合作的无限可能',
      img: secondArticleImg.src,
      description:
        '本文深入探索了AIGC与人类合作的无限可能性，阐述了这种合作如何能塑造出超级个体。我们的讨论涵盖了AIGC的工作原理，以及它如何通过增强个体的能力和效率来改变我们的生活和工作方式。',
      openUrl: '/blog/exploring-unlimited-possibilities-of-aigc-collaboration-shaping-super-individuals',
    },
    {
      title: '利用 AI 技术赚钱的机会与方法',
      img: thirdArticleImg.src,
      description:
        '想要利用AI技术赚钱吗？本文为您介绍如何选择合适的行业、利用自媒体和AI工具吸引流量，以及流量变现的方法。了解利用AI技术赚钱的机会与方法，实现个人收入增长的可能性！',
      openUrl: '/blog/how-to-make-money-with-ai-opportunities-channels',
    },
  ];

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
          {articles.map((item) => {
            const { title, img, description, openUrl } = item;

            return (
              <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={img}
                    alt="art cover"
                    loading="lazy"
                    width="1000"
                    height="667"
                    className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 relative">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{title}</h3>
                  <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">{description}</p>
                  <a className="inline-block" href={openUrl} style={{ textDecoration: 'none' }}>
                    <span className="text-info dark:text-blue-300">阅读全文</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Blog;
