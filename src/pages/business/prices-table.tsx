import React from 'react';

import Layout from '@theme/Layout';

const PricesTable = () => {
  return (
    <Layout
      title={`自媒体AI助手: 价格`}
      description="面对自媒体内容创作的挑战, GPT AI Flow 是您的最佳助手。适合新手到专业博主，我们帮您生成高质量文案、优化互动并确保内容被搜索引擎发现。加入我们，共创成功故事！"
    >
      {/* For Mobile */}
      <div className="md:block lg:hidden xl:container m-auto px-6 py-20 md:px-12 lg:px-20">
        <div className="m-auto text-center lg:w-7/12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">升级为会员 解锁所有功能</h2>
        </div>
        <div className="mt-12 grid items-center gap-6 md:grid-cols-2 lg:flex lg:space-x-8">
          <div className="group relative md:col-span-1 lg:w-[32%]">
            <div
              aria-hidden="true"
              className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
            ></div>
            <div className="relative space-y-8 p-8">
              <h3 className="text-center text-3xl font-semibold text-gray-700 dark:text-white">StartAI 入门工具版</h3>
              <div className="relative flex justify-around">
                <div className="-mr-20 flex items-end justify-center">
                  <div className="flex">
                    <span className="-ml-6 mt-2 text-3xl font-bold text-gray-500">€</span>
                    <span className="leading-0 text-8xl font-bold text-gray-800 dark:text-white">1</span>
                  </div>
                  <div className="mb-2">
                    <span className="block text-xl font-bold text-gray-500 dark:text-gray-400">.99</span>
                    <span className="block text-xl font-bold text-gray-500">/ 月</span>
                  </div>
                </div>
              </div>
              <ul role="list" className="m-auto w-max space-y-4 pb-6 text-gray-600 dark:text-gray-300">
                <li className="space-x-2">
                  <span className="font-semibold text-green-500">✓</span>
                  <span>Chat 悬浮窗功能</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-green-500">✓</span>
                  <span>无限制请求次数</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-green-500">✓</span>
                  <span>模型可切换 GPT 4 (默认 GPT 3.5)</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-green-500">✓</span>
                  <span>自定义指令集 (导入/导出)</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-green-500">✓</span>
                  <a
                    href="/docs/application-scenarios/introduction"
                    className="text-[#0c4a6e] dark:text-gray-200"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>
                      🔗 所有专业模块:
                      <br />
                      沟通助理
                      <br />
                      博客文案
                      <br />
                      小红书达人
                      <br />
                      AI助理
                      <br />
                      评论管理
                      <br />
                      职业助理
                      <br />
                      up主
                      <br />
                      产品经理
                      <br />
                      营销助理
                      <br />
                      SEO助理
                    </span>
                  </a>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-green-500">✓</span>
                  <span className="inline w-max"> 个人文档助手</span> (999 词条)
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-red-500">&times;</span>
                  <span>官方提供 OpenAI key</span>
                </li>
              </ul>
              <a
                href="/download"
                className="relative flex h-11 w-full items-center justify-center px-6 absolute inset-0 rounded-full bg-info transition duration-300 hover:scale-105 active:duration-75 active:scale-95"
              >
                <span className="relative text-base font-semibold text-white dark:text-dark">成为会员</span>
              </a>
            </div>
          </div>

          <div className="group relative row-start-1 md:col-span-2 lg:w-[36%]">
            <div
              aria-hidden="true"
              className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
            ></div>
            <div className="relative space-y-8 p-8">
              <h3 className="text-center text-3xl font-semibold text-gray-700 dark:text-white">StartAI 入门模型版</h3>
              <div className="overflow-hidden">
                <div className="-mr-20 flex items-end justify-center">
                  <div className="flex">
                    <span className="-ml-6 mt-2 text-3xl font-bold text-gray-500">€</span>
                    <span className="leading-0 text-8xl font-bold text-gray-800 dark:text-white">5</span>
                  </div>
                  <div className="mb-2">
                    <span className="block text-xl font-bold text-gray-500 dark:text-gray-400">.82</span>
                    <span className="block text-xl font-bold text-gray-500">/ 月</span>
                  </div>
                </div>
                <div className="text-center text-2xl font-medium">
                  <span className="text-gray-400 line-through">€83.88</span>
                  <span className="font-semibold text-gray-700 dark:text-white">€69.90</span>
                </div>
                <span className="block text-center text-xs uppercase text-gray-500">按年计费</span>
                <span className="m-auto mt-4 block w-max rounded-full bg-gradient-to-r from-yellow-300 to-pink-300 px-4 py-1 text-sm font-medium text-yellow-900">
                  使用折扣后
                </span>
              </div>
              <ul role="list" className="m-auto w-max space-y-4 pb-6 text-gray-600 dark:text-gray-300">
                <li className="space-x-2">
                  <span className="font-semibold text-green-500">✓</span>
                  <span>Chat 悬浮窗功能</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-green-500">✓</span>
                  <span>无限制请求次数</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-green-500">✓</span>
                  <span>官方提供 OpenAI key</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-green-500">✓</span>
                  <span>自定义指令集 (导入/导出)</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-green-500">✓</span>
                  <a
                    href="/docs/application-scenarios/introduction"
                    className="text-[#0c4a6e] dark:text-gray-200"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>
                      🔗 所有专业模块:
                      <br />
                      沟通助理
                      <br />
                      博客文案
                      <br />
                      小红书达人
                      <br />
                      AI助理
                      <br />
                      评论管理
                      <br />
                      职业助理
                      <br />
                      up主
                      <br />
                      产品经理
                      <br />
                      营销助理
                      <br />
                      SEO助理
                    </span>
                  </a>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-green-500">✓</span>
                  <span className="inline w-max"> 个人文档助手</span> (999 词条)
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-red-500">&times;</span>
                  <span>模型可切换</span>
                </li>
              </ul>
              <a
                href="/download"
                className="relative flex h-11 w-full items-center justify-center px-6 absolute inset-0 rounded-full bg-info transition duration-300 hover:scale-105 active:duration-75 active:scale-95"
              >
                <span className="relative text-base font-semibold text-white dark:text-dark">
                  成为会员 (应用内购买)
                </span>
              </a>
            </div>
          </div>

          <div className="group relative md:col-span-1 lg:w-[32%]">
            <div
              aria-hidden="true"
              className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
            ></div>
            <div className="relative space-y-8 p-8">
              <h3 className="text-center text-3xl font-semibold text-gray-700 dark:text-white">免费版</h3>
              <div className="relative flex justify-around">
                <div className="flex">
                  <span className="-ml-2 mt-2 text-3xl font-bold text-gray-500">€</span>
                  <span className="leading-0 text-8xl font-bold text-gray-800 dark:text-white">0</span>
                </div>
              </div>
              <ul role="list" className="m-auto w-max space-y-4 pb-6 text-gray-600 dark:text-gray-300">
                <li className="space-x-2">
                  <span className="font-semibold text-green-500">✓</span>
                  <span>Chat 悬浮窗功能</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-green-500">✓</span>
                  <span>无限制请求次数</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-green-500">✓</span>
                  <span>自定义指令集 (导入/导出)</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-green-500">✓</span>

                  <span>沟通助理模块</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-green-500">✓</span>
                  <span className="inline w-max"> 个人文档助手</span> (49 词条)
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-red-500">&times;</span>
                  <span>模型可切换</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-red-500">&times;</span>
                  <span>官方提供 OpenAI key</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold text-red-500">&times;</span>
                  <span>专业界面模块</span>
                </li>
              </ul>
              <a
                href="/download"
                className="relative flex h-11 w-full items-center justify-center px-6 absolute inset-0 rounded-full cursor-pointer !no-underline bg-sky-50 border border-sky-500 dark:border-gray-600 dark:bg-gray-700 transition duration-300 hover:scale-105 active:duration-75 active:scale-95"
              >
                <span className="relative text-base font-semibold text-sky-600 dark:text-white">开始使用</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* For PC */}
      <div className="sm:hidden md:hidden lg:block xl:container m-auto px-6 py-20 md:px-12 lg:px-20 xl:px-0">
        <div className="m-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">升级为会员 解锁所有功能</h2>
        </div>
        <div className="m-auto mt-12">
          <div className="relative z-10">
            <div className="relative overflow-auto p-6 flex justify-center">
              <table className="w-full border-t border-gray-100 dark:border-gray-700">
                <thead className="bg-white dark:bg-[--ifm-table-cell-color]">
                  <tr>
                    <td className="p-4 sm:sticky"></td>
                    <td className="p-8 space-y-8">
                      <img
                        src="/img/pages/pricesPage/2023-08-23-free.png"
                        className="h-12 w-auto"
                        alt="organization icon"
                        width=""
                        height=""
                      />
                      <div className="space-y-4">
                        <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">FreeAI 免费版</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          为初学者和个体用户提供的入门级AI工具。
                        </p>
                      </div>
                      <h3 className="text-4xl text-gray-900 dark:text-white font-bold flex">
                        <span className="text-lg text-gray-500">€</span>0{' '}
                        <span className="ml-4 h-max mt-auto text-lg text-gray-500 font-light">/ Month</span>{' '}
                      </h3>
                      <a
                        className="relative flex h-11 w-full items-center justify-center px-6 absolute inset-0 rounded-full cursor-pointer bg-sky-50 border border-sky-500 dark:border-gray-700 dark:bg-gray-800 transition duration-300 hover:scale-105 active:duration-75 active:scale-95"
                        href="/download"
                        style={{ textDecoration: 'none' }}
                      >
                        <span className="relative text-base font-semibold text-sky-600 dark:text-white">开始使用</span>
                      </a>
                    </td>
                    <td className="p-8 space-y-8">
                      <img
                        src="/img/pages/pricesPage/2023-08-23-pro.webp"
                        className="h-12 w-auto"
                        alt="team icon"
                        width=""
                        height=""
                      />
                      <div className="space-y-4">
                        <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">StartAI 入门工具版</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          专为创业者和中小企业设计，提供多种专业模式以满足不同的业务需求。
                        </p>
                      </div>
                      <h3 className="text-4xl text-gray-900 dark:text-white font-bold flex">
                        <span className="text-lg text-gray-500">€</span>1.99{' '}
                        <span className="ml-4 h-max mt-auto text-lg text-gray-500 font-light">/ Month</span>{' '}
                      </h3>

                      <div>
                        <a
                          href="/docs/application-scenarios/introduction"
                          className="text-sm align-middle text-gray-400 mt-1 !no-underline dark:text-white hover:text-gray-600"
                        >
                          了解专业模式
                        </a>
                        <a
                          className="relative flex h-11 w-full items-center justify-center px-6 absolute inset-0 rounded-full cursor-pointer bg-info dark:bg-white transition duration-300 hover:scale-105 active:duration-75 active:scale-95"
                          href="/download"
                        >
                          <span className="relative text-base font-semibold align-middle text-white dark:text-black">
                            成为会员 (<span className="w-max text-sm">应用内购买</span>)
                          </span>
                        </a>
                      </div>
                    </td>
                    <td className="p-8 space-y-8">
                      <img
                        // src="/img/pages/pricesPage/2023-08-23-organization.webp"
                        src="/img/pages/pricesPage/2023-08-23-team.webp"
                        className="h-12 w-auto"
                        alt="organization icon"
                        width=""
                        height=""
                      />
                      <div className="space-y-4">
                        <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">StartAI 入门模型版</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          专为创业者和中小企业设计，提供多种专业模式以满足不同的业务需求。
                        </p>
                      </div>
                      <h3 className="text-4xl text-gray-900 dark:text-white font-bold flex">
                        <span className="text-lg text-gray-500">€</span>6.99{' '}
                        <span className="ml-4 h-max mt-auto text-lg text-gray-500 font-light">/ Month</span>{' '}
                      </h3>

                      <a
                        className="relative flex h-11 w-full items-center justify-center px-6 absolute inset-0 rounded-full cursor-pointer bg-info dark:bg-white transition duration-300 hover:scale-105 active:duration-75 active:scale-95"
                        href="/download"
                      >
                        {/* <button className="relative flex h-11 w-full items-center justify-center px-6 absolute inset-0 rounded-full bg-primary dark:bg-white transition duration-300 hover:scale-105 active:duration-75 active:scale-95"> */}
                        <span className="relative text-base font-semibold align-middle text-white dark:text-black">
                          成为会员 (<span className="w-max text-sm">应用内购买</span>)
                        </span>
                        {/* </button> */}
                      </a>
                    </td>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="left-0 border border-sky-100 dark:border-gray-700 bg-sky-50 dark:bg-gray-800 p-4 font-medium text-sky-900 dark:text-gray-200 sm:sticky">
                      <span className="block w-max"> Chat 悬浮窗功能 </span>
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-2xl text-green-500">
                      ✓
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-2xl text-green-500">
                      ✓
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-2xl text-green-500">
                      ✓
                    </td>
                  </tr>
                  <tr>
                    <td className="left-0 border border-sky-100 dark:border-gray-700 bg-sky-50 dark:bg-gray-800 p-4 font-medium text-sky-900 dark:text-gray-200 sm:sticky">
                      <span className="block w-max"> 无限制请求次数 </span>
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-2xl text-green-500">
                      ✓
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-2xl text-green-500">
                      ✓
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-2xl text-green-500">
                      ✓
                    </td>
                  </tr>
                  <tr>
                    <td className="left-0 border border-gray-100 dark:border-gray-700 bg-sky-50 dark:bg-gray-800 p-4 font-medium text-sky-900 dark:text-gray-200 sm:sticky">
                      <span className="block w-max">官方提供 OpenAI key</span>
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 text-center text-2xl text-red-500">
                      &times;
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 text-center text-2xl text-red-500">
                      &times;
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-2xl text-green-500">
                      ✓
                    </td>
                  </tr>
                  <tr>
                    <td className="left-0 border border-sky-100 dark:border-gray-700 bg-sky-50 dark:bg-gray-800 p-4 font-medium text-sky-900 dark:text-gray-200 sm:sticky">
                      <span className="block w-max">
                        模型可切换 GPT 4
                        <br />
                        (默认 GPT 3.5)
                      </span>
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-2xl text-red-500">
                      &times;
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-2xl text-green-500">
                      ✓
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-2xl text-red-500">
                      &times;
                    </td>
                  </tr>
                  <tr>
                    <td className="left-0 border border-sky-100 dark:border-gray-700 bg-sky-50 dark:bg-gray-800 p-4 font-medium text-sky-900 dark:text-gray-200 sm:sticky">
                      <span className="block w-max">
                        自定义指令集管理
                        <br />
                        (导入/导出)
                      </span>
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-2xl text-green-500">
                      ✓
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-2xl text-green-500">
                      ✓
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-2xl text-green-500">
                      ✓
                    </td>
                  </tr>
                  <tr>
                    <td className="left-0 border border-sky-100 dark:border-gray-700 bg-sky-50 dark:bg-gray-800 p-4 font-medium text-sky-900 dark:text-gray-200 sm:sticky">
                      <span className="block w-max">沟通助理模块</span>
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 text-center text-2xl text-green-500">
                      ✓
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 text-center text-2xl text-green-500">
                      ✓
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-2xl text-green-500">
                      ✓
                    </td>
                  </tr>
                  <tr>
                    <td className="left-0 border border-gray-100 dark:border-gray-700 bg-sky-50 dark:bg-gray-800 p-4 font-medium text-sky-900 dark:text-gray-200 sm:sticky">
                      <a
                        href="/docs/application-scenarios/introduction"
                        className="text-[#0c4a6e] dark:text-gray-200"
                        style={{ textDecoration: 'none' }}
                      >
                        <span className="block w-max">
                          🔗 所有专业模块:
                          <br />
                          沟通助理
                          <br />
                          博客文案
                          <br />
                          小红书达人
                          <br />
                          AI助理
                          <br />
                          评论管理
                          <br />
                          职业助理
                          <br />
                          up主
                          <br />
                          产品经理
                          <br />
                          营销助理
                          <br />
                          SEO助理
                        </span>
                      </a>
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-2xl text-red-500">
                      &times;
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-2xl text-green-500">
                      ✓
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-2xl text-green-500">
                      ✓
                    </td>
                  </tr>
                  <tr>
                    <td className="left-0 border border-gray-100 dark:border-gray-700 bg-sky-50 dark:bg-gray-800 p-4 font-medium text-sky-900 dark:text-gray-200 sm:sticky">
                      <a
                        href="/docs/intro/local-personal-document-assistant"
                        className="text-[#0c4a6e] dark:text-gray-200"
                        style={{ textDecoration: 'none' }}
                      >
                        <span className="inline w-max"> 🔗 个人文档助手</span>
                        <br /> (词条)
                      </a>
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-base text-gray-700 dark:text-white">
                      49条
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-base text-gray-700 dark:text-white">
                      999条
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-base text-gray-700 dark:text-white">
                      999条
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PricesTable;
