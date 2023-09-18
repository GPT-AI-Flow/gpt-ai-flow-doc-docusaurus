import React from 'react';

import Container from './Container';

const Testimonials = () => {
  return (
    <div className="text-gray-600 dark:text-gray-300" id="reviews">
      <Container>
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
            我们的产品获得了一批粉丝，让我们来看看他们的<b>真实</b>评价。
          </p>
        </div>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="/img/astro-theme/avatars/avatar.webp"
                alt="user avatar"
                width="400"
                height="400"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa
              doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non
              cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="/img/astro-theme/avatars/avatar-1.webp"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane doe</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p>
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
                src="/img/astro-theme/avatars/avatar-2.webp"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Yanick Doe</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Developer</p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam
              sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et
              rerum.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="/img/astro-theme/avatars/avatar-3.webp"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane Doe</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam
              sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et
              rerum.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="/img/astro-theme/avatars/avatar-4.webp"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Andy Doe</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Manager</p>
              </div>
            </div>
            <p className="mt-8">
              {' '}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam
              sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et
              rerum.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="/img/astro-theme/avatars/avatar-2.webp"
                alt="user avatar"
                width="400"
                height="400"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Yanndy Doe</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam
              sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et
              rerum.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
