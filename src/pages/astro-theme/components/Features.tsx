import React from 'react';

import Container from './Container';

interface CardsForFeatures_input {
  location: string;
}
export const CardsForFeatures = (props: CardsForFeatures_input) => {
  const { location } = props;

  const isHomePage = location === 'home';

  return (
    <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
      <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img
            src="/img/icons/2023-09-18-img-7-icon-praise.png"
            className="w-12"
            // width="512"
            // height="512"
            alt="burger illustration"
          />

          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
              夸夸小助手
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
              🌟 一键生成<b>让人心情愉悦</b>的夸赞语句
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              💬 快速生成<b>各种场合</b>下的夸奖话语
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              🎁 适用于亲友、同事等，让他们感受到您的<b>认可和鼓励</b>
            </p>
          </div>

          <a
            href={
              isHomePage ? '/docs/application-scenarios/introduction' : '/docs/application-scenarios/praiseAssistant'
            }
            className="flex items-center justify-between group-hover:text-secondary"
            style={{ textDecoration: 'none' }}
          >
            <span className="text-sm">了解更多</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img
            src="/img/icons/2023-09-18-img-8-icon-leadership.png"
            className="w-12"
            // width="512"
            // height="512"
            alt="burger illustration"
          />

          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
              回复领导
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
              📝 为工作邮件、报告提供<b>专业、得体的回复模板</b>
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              💡 提供实时的沟通策略与建议，<b>确保回复得当</b>
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              🤝 帮助你与上司<b>建立更和谐的工作关系</b>
            </p>
          </div>

          <a
            href={
              isHomePage ? '/docs/application-scenarios/introduction' : '/docs/application-scenarios/responseToLeander'
            }
            className="flex items-center justify-between group-hover:text-secondary"
            style={{ textDecoration: 'none' }}
          >
            <span className="text-sm">了解更多</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img
            src="/img/icons/2023-09-18-img-9-icon-logo-wechat.png"
            className="w-12"
            // width="512"
            // height="512"
            alt="burger illustration"
          />

          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
              朋友圈文案
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
              🖋 一键生成<b>吸引眼球的朋友圈</b>文案和状态
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              📸 为您的照片提供<b>贴切的描述和引语</b>
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              🎈 提供各种主题和风格的文案，<b>满足您的每一次分享</b>
            </p>
          </div>
          <a
            href={isHomePage ? '/docs/application-scenarios/introduction' : '/docs/application-scenarios/pengYouQuan'}
            className="flex items-center justify-between group-hover:text-secondary"
            style={{ textDecoration: 'none' }}
          >
            <span className="text-sm">了解更多</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img
            src="/img/icons/2023-09-18-img-10-icon-mail.png"
            className="w-12"
            // width="512"
            // height="512"
            alt="burger illustration"
          />

          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
              邮件助手
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
              📮 为各种场合<b>提供专业的电子邮件模板</b>
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              💡 助您<b>快速回复工作邮件</b>，提高沟通效率
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              ✒️ 提供邮件写作建议，<b>确保您的邮件内容既专业又得体</b>
            </p>
          </div>

          <a
            href={isHomePage ? '/docs/application-scenarios/introduction' : '/docs/application-scenarios/email'}
            className="flex items-center justify-between group-hover:text-secondary"
            style={{ textDecoration: 'none' }}
          >
            <span className="text-sm">了解更多</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img
            src="/img/icons/2023-09-18-img-11-icon-social-media.png"
            className="w-12"
            // width="512"
            // height="512"
            alt="burger illustration"
          />

          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
              社交媒体经理
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
              📕 专为<b>小红书</b>优化的生成文案
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              🌟 快速产生<b>引人注目的帖子和动态标题</b>
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              🎨 多场景文案创意工具，轻松应对<b>品牌活动、日常分享或特殊节日</b>的内容需求
            </p>
          </div>
          <a
            href={
              isHomePage ? '/docs/application-scenarios/introduction' : '/docs/application-scenarios/user-testimonial'
            }
            className="flex items-center justify-between group-hover:text-secondary"
            style={{ textDecoration: 'none' }}
          >
            <span className="text-sm">了解更多</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img
            src="/img/icons/2023-09-18-img-12-icon-social-sumary.png"
            className="w-12"
            // width="512"
            // height="512"
            alt="burger illustration"
          />

          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
              总结小助手
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
              📖 快速将复杂内容整理成<b>简洁明了</b>的总结文本
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              🖊 根据您提供的信息，<b>自动提取关键点</b>并生成总结
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              ✍️ 为会议、项目、活动等提供<b>专业的文字总结模板</b>，助您提高工作效率
            </p>
          </div>

          <a
            href={
              isHomePage ? '/docs/application-scenarios/introduction' : '/docs/application-scenarios/summaryAssitant'
            }
            className="flex items-center justify-between group-hover:text-secondary"
            style={{ textDecoration: 'none' }}
          >
            <span className="text-sm">了解更多</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img
            src="/img/icons/2023-09-22-img-12-video-play.png"
            className="w-12"
            // width="512"
            // height="512"
            alt="burger illustration"
          />

          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
              知识分享脚本
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
              📘 一键生成<b>有深度和见解</b>的知识分享内容
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              🧠 快速梳理<b>核心观点</b>，提高分享的效果
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              📢 适用于各种平台，确保您的知识<b>广泛传播并受到认可</b>
            </p>
          </div>
          <a
            href={
              isHomePage ? '/docs/application-scenarios/introduction' : '/docs/application-scenarios/knowledgeShare'
            }
            className="flex items-center justify-between group-hover:text-secondary"
            style={{ textDecoration: 'none' }}
          >
            <span className="text-sm">了解更多</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      {isHomePage && (
        <div className="group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
            <img
              src="/img/icons/2023-09-18-img-14-icon-more-features-easy-use.png"
              className="w-12"
              // width="512"
              // height="512"
              alt="burger illustration"
            />

            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                更多功能
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                ✍️ 利用<b>SEO内容优化</b>和专业文案，提升品牌可见度并助力销售增长。
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                📊 结合<b>SWOT分析</b>和<b>OKR方法</b>，确保产品优势与团队目标与组织战略一致。
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                💡 不断优化产品功能，确保<b>满足用户需求</b>
              </p>
            </div>
            <a
              href="/docs/application-scenarios/introduction"
              className="flex items-center justify-between group-hover:text-secondary"
              style={{ textDecoration: 'none' }}
            >
              <span className="text-sm">了解更多</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      )}
      {!isHomePage && (
        <>
          <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="/img/icons/2023-09-22-img-4-personality-disorder.png"
                className="w-12"
                // width="512"
                // height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                  mbti 研究员
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  📘 提供详细的<b>MBTI性格描述</b>和分析
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  💡 为您和他人的MBTI性格类型提供<b>互动和沟通建议</b>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  🌐 探索各个性格类型在职场、人际关系中的<b>表现和策略</b>
                </p>
              </div>
              <a
                href={
                  isHomePage ? '/docs/application-scenarios/introduction' : '/docs/application-scenarios/mbtiResearcher'
                }
                className="flex items-center justify-between group-hover:text-secondary"
                style={{ textDecoration: 'none' }}
              >
                <span className="text-sm">了解更多</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="/img/icons/2023-09-22-img-5-loudspeaker.png"
                className="w-12"
                // width="512"
                // height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                  群发消息
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  📣 设计<b>高效吸引</b>的群发信息内容
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  🔗 给出合适的内容建议<b>促进用户点击</b>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  💌 提供各种场景下的消息模板，确保<b>内容既有趣又贴切</b>
                </p>
              </div>
              {isHomePage && (
                <a
                  href={'/docs/application-scenarios/introduction'}
                  className="flex items-center justify-between group-hover:text-secondary"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="text-sm">了解更多</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
          <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="/img/icons/2023-09-22-img-6-delivery-box.png"
                className="w-12"
                // width="512"
                // height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                  带货文案
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  🛍 创作针对性的<b>带货文案</b>，提升商品销售
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  💼 分析市场趋势，为您的产品提供<b>最佳宣传策略</b>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  🌟 利用文案技巧，<b>引导消费者产生购买意向</b>
                </p>
              </div>
              {isHomePage && (
                <a
                  href={'/docs/application-scenarios/introduction'}
                  className="flex items-center justify-between group-hover:text-secondary"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="text-sm">了解更多</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
          <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="/img/icons/2023-09-22-img-7-fountain-pen.png"
                className="w-12"
                // width="512"
                // height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                  文案宣传
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  ✒️ 生成<b>引人注目的宣传文案</b>，提升品牌影响力
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  🎯 定位目标受众，确保文案<b>触及正确的用户群</b>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  💡 利用创意策略，<b>增强文案的传播力</b>
                </p>
              </div>
              {isHomePage && (
                <a
                  href={'/docs/application-scenarios/introduction'}
                  className="flex items-center justify-between group-hover:text-secondary"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="text-sm">了解更多</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
          <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="/img/icons/2023-09-22-img-8-lifestyle.png"
                className="w-12"
                // width="512"
                // height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                  小红书活动
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  🎉 设计专为<b>小红书平台</b>的活动文案
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  💡 一键生成各类<b>活动宣传</b>与推广内容
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  🌹 确保您的活动在小红书上<b>受到广大用户的关注</b>
                </p>
              </div>
              <a
                href={
                  isHomePage ? '/docs/application-scenarios/introduction' : '/docs/application-scenarios/xiaoHongShu'
                }
                className="flex items-center justify-between group-hover:text-secondary"
                style={{ textDecoration: 'none' }}
              >
                <span className="text-sm">了解更多</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="/img/icons/2023-09-22-img-9-jewelry.png"
                className="w-12"
                // width="512"
                // height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                  小红书复古珠宝
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  📿 提供<b>复古珠宝</b>的宣传文案
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  💍 快速生成与复古珠宝相关的<b>引人入胜</b>的内容
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  ✨ 助力您在小红书上<b>展示和推广</b>您的珠宝产品
                </p>
              </div>
              <a
                href={
                  isHomePage ? '/docs/application-scenarios/introduction' : '/docs/application-scenarios/xiaoHongShu'
                }
                className="flex items-center justify-between group-hover:text-secondary"
                style={{ textDecoration: 'none' }}
              >
                <span className="text-sm">了解更多</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="/img/icons/2023-09-22-img-10-seo.png"
                className="w-12"
                // width="512"
                // height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                  SEO优化
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  🔍 为内容<b>提供SEO优化建议</b>，提高搜索引擎排名
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  💡 生成针对性的<b>关键词和元标签</b>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  📈 确保您的内容<b>在搜索引擎中占据有利位置</b>
                </p>
              </div>

              <a
                href={
                  isHomePage
                    ? '/docs/application-scenarios/introduction'
                    : '/docs/application-scenarios/user-testimonial'
                }
                className="flex items-center justify-between group-hover:text-secondary"
                style={{ textDecoration: 'none' }}
              >
                <span className="text-sm">了解更多</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="/img/icons/2023-09-22-img-11-icon-bilibili.png"
                className="w-12"
                // width="512"
                // height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                  B站评论
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  🎥 为B站视频提供<b>热门评论</b>生成与策略
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  📣 快速回应<b>热门话题</b>，提高互动度
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  👁‍🗨 帮助您在B站上<b>建立积极的社区互动</b>
                </p>
              </div>
              {isHomePage && (
                <a
                  href={'/docs/application-scenarios/introduction'}
                  className="flex items-center justify-between group-hover:text-secondary"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="text-sm">了解更多</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
          <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="/img/icons/2023-09-18-img-13-icon-tiktok-short-video.png"
                className="w-12"
                // width="512"
                // height="512"
                alt="burger illustration"
              />
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                  短视频脚本制作
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  🎥 提供短视频内容<b>创意和脚本模板</b>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  🎬 一键生成<b>吸引眼球的</b>视频文案与剧情
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  🌈 为您的短视频内容提供风格和节奏建议，确保每次发布获得<b>大量点赞与分享</b>
                </p>
              </div>
              {isHomePage && (
                <a
                  href={'/docs/application-scenarios/introduction'}
                  className="flex items-center justify-between group-hover:text-secondary"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="text-sm">了解更多</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
          <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="/img/icons/2023-09-22-img-13-icon-zhihu.png"
                className="w-12"
                // width="512"
                // height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                  知乎问答
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  📘 为您提供<b>专业且有深度的答案</b>生成
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  💬 快速回应各种<b>知乎热门问题</b>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  🧠 确保您在知乎上<b>树立权威形象</b>并与大众有效互动
                </p>
              </div>
              {isHomePage && (
                <a
                  href={'/docs/application-scenarios/introduction'}
                  className="flex items-center justify-between group-hover:text-secondary"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="text-sm">了解更多</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
          <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="/img/icons/2023-09-22-img-14-swot-analysis.png"
                className="w-12"
                // width="512"
                // height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                  SWOT分析
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  📊 为产品或项目提供<b>全面的SWOT分析</b>工具
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  💡 快速识别<b>优势、劣势、机会和威胁</b>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  🚀 为决策者提供清晰的策略建议，<b>确保项目或产品的成功</b>
                </p>
              </div>
              {isHomePage && (
                <a
                  href={'/docs/application-scenarios/introduction'}
                  className="flex items-center justify-between group-hover:text-secondary"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="text-sm">了解更多</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
          <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="/img/icons/2023-09-22-img-15-okr.png"
                className="w-12"
                // width="512"
                // height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                  OKR方法
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  🎯 一键生成针对企业和团队的<b>目标和关键成果</b>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  💪 帮助团队<b>更高效地达成目标</b>并跟踪进度
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  🌱 促进组织内的<b>透明度和协同工作</b>，确保长期的成功和增长
                </p>
              </div>
              {isHomePage && (
                <a
                  href={'/docs/application-scenarios/introduction'}
                  className="flex items-center justify-between group-hover:text-secondary"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="text-sm">了解更多</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
          <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="/img/icons/2023-09-22-img-16-treasure.png"
                className="w-12"
                // width="512"
                // height="512"
                alt="burger illustration"
              />

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                  未来探索
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  🔮 我们正在不断地<b>研发与创新</b>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  💡 期待为您带来<b>更多实用的功能</b>和工具
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  🚀 请持续关注，<b>与我们一起走进未来</b>!
                </p>
              </div>
              <a
                href={
                  isHomePage
                    ? '/docs/application-scenarios/introduction'
                    : '/docs/proudct/how-professional-mode-of-ai-flow-revolutionizes-content-creation'
                }
                className="flex items-center justify-between group-hover:text-secondary"
                style={{ textDecoration: 'none' }}
              >
                <span className="text-sm">了解更多</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Features = () => {
  return (
    <div id="features">
      <Container>
        <div className="md:w-2/3 lg:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-secondary"
          >
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clipRule="evenodd"
            />
          </svg>

          <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            智能AI，让您的自媒体营销更轻松
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            我们的AI工具为您提供了一个强大的平台，帮助您自动化内容生成、分析受众数据并优化您的自媒体战略。
          </p>
        </div>
        <CardsForFeatures location="home" />
      </Container>
    </div>
  );
};

export default Features;
