import Layout from '@theme/Layout';
import React from 'react';

const TestimonialPage = (): JSX.Element => {
  return (
    <Layout
      title={`我们真实的用户评价`}
      description="面对自媒体内容创作的挑战, GPT AI Flow 是您的最佳助手。适合新手到专业博主，我们帮您生成高质量文案、优化互动并确保内容被搜索引擎发现。加入我们，共创成功故事！"
    >
      <div className="Container" id="testimonialPage">
        <div className="py-16">
          <div className="container m-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
            <div className="mb-20 space-y-4 px-6 md:px-0">
              <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                他们
                <svg
                  className="svg-inline--fa fa-heart fa-w-16"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="heart"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  style={{ width: '2rem', color: '#f44336', margin: '0 10px' }}
                >
                  <path
                    className=""
                    fill="currentColor"
                    d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                  ></path>
                </svg>
                GPT AI Flow
              </h2>
              <p className="text-center text-gray-500 dark:text-gray-400 md:text-lg">
                我们的产品已经吸引了来自不同领域的一批粉丝，包括工程师、创业者、产品经理、在校学生、设计师、教师和翻译等等。
                <br />
                <span style={{ backgroundColor: '#fef3c7', color: '#4b5563' }}>
                  他们对我们产品的真实评价是我们最有说服力的证明。
                </span>
              </p>
            </div>
            <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
              <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1559671811780087810/Y4E8X2do_400x400.jpg"
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">Eric Ampire</h6>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Mobile dev</p>
                  </div>
                </div>
                <p className="mt-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum
                  ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam
                  sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum
                  et rerum.
                </p>
              </div>
              <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1372441824560771075/DTcuXT0Z_400x400.jpg"
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">Rodrigo Aguilar</h6>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Creator of Tailwind Awesome</p>
                  </div>
                </div>
                <p className="mt-8">
                  {' '}
                  Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint
                  libero voluptas veniam at reprehenderit, veritatis harum et rerum.
                </p>
              </div>
              <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1362367807887974401/kuJ1OFT1_400x400.jpg"
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">Adam Wathan</h6>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Creator of Tailwindcss</p>
                  </div>
                </div>
                <p className="mt-8">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab
                  veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit,
                  veritatis harum et rerum.
                </p>
              </div>
              <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1511686703672606725/_DV4Mfjd_400x400.jpg"
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">Dan Kyungu</h6>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Mobile dev</p>
                  </div>
                </div>
                <p className="mt-8">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab
                  veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit,
                  veritatis harum et rerum.
                </p>
              </div>
              <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="images/first_user.webp"
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">John Doe</h6>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Creator dev</p>
                  </div>
                </div>
                <p className="mt-8">
                  {' '}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab
                  veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit,
                  veritatis harum et rerum.
                </p>
              </div>
              <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="images/second_user.webp"
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">Randy Doe</h6>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Mobile dev</p>
                  </div>
                </div>
                <p className="mt-8">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab
                  veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit,
                  veritatis harum et rerum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TestimonialPage;
