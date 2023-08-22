import React from 'react';

import Layout from '@theme/Layout';

const PricesTable = () => {
  return (
    <Layout
      title={`自媒体AI助手: 高效创作, 卓越成果!`}
      description="面对自媒体内容创作的挑战, GPT AI Flow 是您的最佳助手。适合新手到专业博主，我们帮您生成高质量文案、优化互动并确保内容被搜索引擎发现。加入我们，共创成功故事！"
    >
      <div className="xl:container m-auto px-6 py-20 md:px-12 lg:px-20 xl:px-0">
        <div className="m-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">A plan for everyone</h2>
        </div>
        <div className="m-auto mt-12">
          <div className="relative z-10">
            <div className="relative overflow-auto p-6">
              <table className="w-full border-t border-gray-100 dark:border-gray-700">
                <thead>
                  <tr>
                    <td className="p-4 sm:sticky"></td>
                    <td className="p-8 space-y-8">
                      <img
                        src="/img/pricesPage/2023-08-23-free.png"
                        className="h-12 w-auto"
                        alt="organization icon"
                        width=""
                        height=""
                      />
                      <div className="space-y-4">
                        <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">FreeAI</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Delectus natus illum in, iste ut facilis ex sit culpa fuga dolor atque? Quis.
                        </p>
                      </div>
                      <h3 className="text-4xl text-gray-900 dark:text-white font-bold flex">
                        <span className="text-lg text-gray-500">$</span>15{' '}
                        <span className="ml-4 h-max mt-auto text-lg text-gray-500 font-light">/ Month</span>{' '}
                      </h3>
                      <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 dark:before:border-gray-700 dark:before:bg-gray-800 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                        <span className="relative text-base font-semibold text-sky-600 dark:text-white">
                          Get Started
                        </span>
                      </button>
                    </td>
                    <td className="p-8 space-y-8">
                      <img
                        src="/img/pricesPage/2023-08-23-team.webp"
                        className="h-12 w-auto"
                        alt="team icon"
                        width=""
                        height=""
                      />
                      <div className="space-y-4">
                        <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">StartAI</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Delectus natus illum vel veritatis in, iste ut facilis ex sit culpa fuga dolor atque? Quis.
                        </p>
                      </div>
                      <h3 className="text-4xl text-gray-900 dark:text-white font-bold flex">
                        <span className="text-lg text-gray-500">$</span>189{' '}
                        <span className="ml-4 h-max mt-auto text-lg text-gray-500 font-light">/ Month</span>{' '}
                      </h3>
                      <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                        <span className="relative text-base font-semibold text-white dark:text-dark">Buy Now</span>
                      </button>
                    </td>
                    <td className="p-8 space-y-8">
                      <img
                        src="/img/pricesPage/2023-08-23-organization.webp"
                        className="h-12 w-auto"
                        alt="organization icon"
                        width=""
                        height=""
                      />
                      <div className="space-y-4">
                        <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">MasterAI</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Delectus natus illum vel veritatis in, iste ut facilis ex sit culpa fuga dolor atque? Quis.
                        </p>
                      </div>
                      <h3 className="text-4xl text-gray-900 dark:text-white font-bold flex">
                        <span className="text-lg text-gray-500">$</span>379{' '}
                        <span className="ml-4 h-max mt-auto text-lg text-gray-500 font-light">/ Month</span>{' '}
                      </h3>
                      <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                        <span className="relative text-base font-semibold text-white dark:text-dark">Buy Now</span>
                      </button>
                    </td>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="left-0 border border-sky-100 dark:border-gray-700 bg-sky-50 dark:bg-gray-800 p-4 font-medium text-sky-900 dark:text-gray-200 sm:sticky">
                      <span className="block w-max"> Favorite profile </span>
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-green-500">
                      &check;
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-green-500">
                      &check;
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-green-500">
                      &check;
                    </td>
                  </tr>
                  <tr>
                    <td className="left-0 border border-sky-100 dark:border-gray-700 bg-sky-50 dark:bg-gray-800 p-4 font-medium text-sky-900 dark:text-gray-200 sm:sticky">
                      <span className="block w-max"> All courses and videos </span>
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 text-center text-2xl text-red-500">
                      &times;
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 text-center text-2xl text-red-500">
                      &times;
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-green-500">
                      &check;
                    </td>
                  </tr>
                  <tr>
                    <td className="left-0 border border-gray-100 dark:border-gray-700 bg-sky-50 dark:bg-gray-800 p-4 font-medium text-sky-900 dark:text-gray-200 sm:sticky">
                      <span className="block w-max"> Questions & Answers (soon) </span>
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-green-500">
                      &check;
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-green-500">
                      &check;
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-green-500">
                      &check;
                    </td>
                  </tr>
                  <tr>
                    <td className="left-0 border border-gray-100 dark:border-gray-700 bg-sky-50 dark:bg-gray-800 p-4 font-medium text-sky-900 dark:text-gray-200 sm:sticky">
                      <span className="block w-max"> Source files, ePub </span>
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 text-center text-2xl text-red-500">
                      &times;
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-green-500">
                      &check;
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-green-500">
                      &check;
                    </td>
                  </tr>
                  <tr>
                    <td className="left-0 border border-gray-100 dark:border-gray-700 bg-sky-50 dark:bg-gray-800 p-4 font-medium text-sky-900 dark:text-gray-200 sm:sticky">
                      <span className="block w-max"> UI templates, icons, illustrations </span>
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-gray-600 dark:text-gray-300">
                      <span className="m-auto block w-max"> Limited to 5 </span>
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-green-500">
                      &check;
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-green-500">
                      &check;
                    </td>
                  </tr>
                  <tr>
                    <td className="left-0 border border-gray-100 dark:border-gray-700 bg-sky-50 dark:bg-gray-800 p-4 font-medium text-sky-900 dark:text-gray-200 sm:sticky">
                      <span className="block w-max"> Premium tutorials </span>
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 text-center text-2xl text-red-500">
                      &times;
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-green-500">
                      &check;
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-green-500">
                      &check;
                    </td>
                  </tr>
                  <tr>
                    <td className="left-0 border border-gray-100 dark:border-gray-700 bg-sky-50 dark:bg-gray-800 p-4 font-medium text-sky-900 dark:text-gray-200 sm:sticky">
                      <span className="block w-max"> Commercial use </span>
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 text-center text-2xl text-red-500">
                      &times;
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 text-center text-2xl text-red-500">
                      &times;
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-green-500">
                      &check;
                    </td>
                  </tr>
                  <tr>
                    <td className="left-0 border border-gray-100 dark:border-gray-700 bg-sky-50 dark:bg-gray-800 p-4 font-medium text-sky-900 dark:text-gray-200 sm:sticky">
                      <span className="block w-max"> Manage team and see progress </span>
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 text-center text-2xl text-red-500">
                      &times;
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 text-center text-2xl text-red-500">
                      &times;
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-center text-green-500">
                      &check;
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
