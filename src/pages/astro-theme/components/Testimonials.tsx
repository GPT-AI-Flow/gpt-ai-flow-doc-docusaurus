import React from 'react';

import _ from 'lodash';

import Container from './Container';

interface IComment {
  authorName: string;
  authorImg: string;
  authorJob: string;
  authorSourceUrl: string;
  content: string;
}

const comments: IComment[] = _.sampleSize(
  [
    {
      authorName: '穆扎穆扎',
      authorImg:
        '/img/avatars/2023-09-18-img-1-avatar-8f3e7e682b4393692a8059240506a6015a1d616c.jpg@160w_160h_1c_1s_!web-avatar-comment.avif',
      authorJob: '在校学生',
      authorSourceUrl: 'https://space.bilibili.com/37195870',
      content:
        '我最喜欢使用 GPT AI Flow 内的桌面端工具。它的便捷交互让我深深地喜欢上了它。不需要切换网页端的编辑方式, 让我在日常使用中感觉非常舒服~~',
    },
    {
      authorName: '首席芒果官',
      authorImg:
        '/img/avatars/2023-09-18-img-2-avatar-c97e376ec320d285fb5473a39198e17d3d280d4a.jpg@160w_160h_1c_1s_!web-avatar-comment.avif',
      authorJob: '新媒体运营',
      authorSourceUrl: 'https://space.bilibili.com/18673696',
      content:
        'GPT AI Flow 在一定程度上仍有待完善, 但它确实解决了自媒体内容创作的大部分难题。从悬浮交互窗口到专业模式, 这款工具为个体创作者带来了强大的便利。试用后, 我确实感受到了内容产出效率和互动率的显著提升。',
    },
    {
      authorName: '雨声0611',
      authorImg:
        '/img/avatars/2023-09-18-img-4-e1a78d87bf73525cce97823a2ac91fe15dfd11d0.jpg@160w_160h_1c_1s_!web-avatar-comment.avif',
      authorJob: '小红书内容运营',
      authorSourceUrl: 'https://space.bilibili.com/3493122252212526',
      content:
        '我做内容运营那么久, 使用过各种辅助工具。但 GPT AI Flow 的专业模式真的让我省心了很多。与OpenAI相比, 它的模块使用更流畅, 而且无需“魔法”便能轻松上手。',
    },
    {
      authorName: 'NandyHuang',
      authorImg:
        '/img/avatars/2023-09-18-img-5-avatar-6bf33692392f6a281c256cbfe658ea0636d830f1.jpg@160w_160h_1c_1s_!web-avatar-comment.avif',
      authorJob: '文案编辑',
      authorSourceUrl: 'https://space.bilibili.com/44136249',
      content:
        '自从使用了文案宣传模块, 我觉得品牌传播从未如此轻松。不仅提升了公司在社交媒体上的曝光率, 而且质量一直很稳定！',
    },
    {
      authorName: '下不下雨-',
      authorImg:
        '/img/avatars/2023-09-18-img-3-8921c2cb20c4461b6ae6b8d18c37b48c9a99bd5f.jpg@160w_160h_1c_1s_!web-avatar-comment.avif',
      authorJob: '某大厂产品经理',
      authorSourceUrl: 'https://space.bilibili.com/6751348',
      content:
        '使用 GPT AI Flow 来帮助我撰写产品发布文案真的省时省力。它适用于大部分简单的场景, 但对于复杂内容, 我还是更偏向于自己动手。',
    },
    {
      authorName: 's20011120',
      authorImg:
        '/img/avatars/2023-09-18-img-6-avatar-38f6605f1594facd8febe0873295220fa0b77f7e.jpg@160w_160h_1c_1s_!web-avatar-comment.avif',
      authorJob: '学生党',
      authorSourceUrl: 'https://space.bilibili.com/1113066162',
      content:
        '自从我开始使用 GPT AI Flow, 我的报告和论文初稿写作速度提高了很多。虽然最后还需要我进行修改和优化, 但它给我的学习过程带来了很大的便利。真心推荐给其他同学!',
    },
    {
      authorName: '耳東陳的夏天',
      authorImg:
        '/img/avatars/2023-10-30-img-1-0d46b2a016d5f0d440d291b6b48ae1789a293b9f.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif',
      authorJob: '自由撰稿人',
      authorSourceUrl: 'https://space.bilibili.com/29169142',
      content:
        'GPT AI Flow 彻底改变了我的写作流程。现在, 我可以快速地构思并拓展我的文章框架, 它的内容建议对我锤炼文笔有着莫大的帮助。客户对我的稿件质量更是满意, 这全得归功于这款工具的辅助。',
    },
    {
      authorName: '西伯利亚土豆子',
      authorImg:
        '/img/avatars/2023-10-30-img-2-982d823702dc6d2ecea13cd0a4b458fbdf603da0.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif',
      authorJob: '自由职业者',
      authorSourceUrl: 'https://space.bilibili.com/30880159',
      content:
        '我经常需要为客户创作各种内容, GPT AI Flow 就像我的私人助手。每次用它, 都能帮我迅速构建一个框架, 为我的创作提供方向。与其他工具相比, 它确实在理解上有所突破。',
    },

    {
      authorName: '和所有的快乐嗦嗨嗨',
      authorImg:
        '/img/avatars/2023-10-30-img-3-1aea15d8c86723bbc336fd0bc4238dc6faab6b8e.jpg@240w_240h_1c_1s_!web-avatar-space-header.webp',
      authorJob: '市场营销经理',
      authorSourceUrl: 'https://space.bilibili.com/172828110',
      content:
        '我们团队对 GPT AI Flow 赞不绝口。它为我们提供了一种全新的内容创作方式，使我们的社交媒体策略更上一层楼。特别是它的用户友好界面和准确的内容建议，使我们的营销活动更加高效和精准。',
    },
    {
      authorName: '吉克斯实验室',
      authorImg:
        '/img/avatars/2023-10-30-img-4-154beb6eb015503b1714efbb70c7a2c79081c8c0.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif',
      authorJob: '技术博主',
      authorSourceUrl: 'https://space.bilibili.com/125430684',
      content:
        'GPT AI Flow 是技术博文创作的游戏改变者。它不仅理解复杂的技术术语，还能用易于理解的语言传达给读者。每次发布，都能感受到读者的积极反馈，我对这款工具的信任度日益增加。',
    },
    {
      authorName: '清风明月最好',
      authorImg:
        '/img/avatars/2023-10-30-img-5-9ef4ffa91b6390f9563f603c474ea8321a421df5.jpg@240w_240h_1c_1s_!web-avatar-space-header.webp',
      authorJob: '创业者',
      authorSourceUrl: 'https://space.bilibili.com/386908519',
      content:
        '自从用上GPT AI Flow，我们团队的营销文案变得更有创意了。我们发现，不只是效率提高，它还帮助我们在众多品牌中脱颖而出。这款工具是创业者不可或缺的数字助手。',
    },
  ],
  6
);

const Testimonials = () => {
  return (
    <div className="!mt-5 text-gray-600 dark:text-gray-300" id="reviews">
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
            我们的产品获得了一批粉丝, 让我们来看看他们的<b>真实</b>评价。
          </p>
        </div>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          {comments.map((comment) => {
            const keyVersion = new Date().getTime();
            const { authorName, authorImg: authorAvatar, authorJob, content } = comment;

            return (
              <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={`${authorAvatar}?v=${keyVersion}`}
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">{authorName}</h6>
                    <p className="text-sm text-gray-500 dark:text-gray-300">{authorJob}</p>
                  </div>
                </div>
                <p className="mt-8">{content}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
