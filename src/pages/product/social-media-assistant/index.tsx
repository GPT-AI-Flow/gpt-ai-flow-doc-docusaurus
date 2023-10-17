import React from 'react';

import Layout from '@theme/Layout';

const SocialMediaAssistantPage = () => {
  return (
    <Layout title={`自媒体运营助手`} description="">
      <div className="relative">
        <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>

        <div>Social Media Assistant Page</div>
      </div>
    </Layout>
  );
};

export default SocialMediaAssistantPage;
