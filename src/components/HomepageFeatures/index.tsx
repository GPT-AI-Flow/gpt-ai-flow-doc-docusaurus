import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// @ts-ignore
import feature1 from '@site/static/img/homePage/2023-08-03-bubble-gum-brainstorming.png';
// @ts-ignore
import feature2 from '@site/static/img/homePage/2023-08-03-bubble-gum-woman-travels-and-takes-a-selfie.png';
// @ts-ignore
import feature3 from '@site/static/img/homePage/2023-08-03-bubble-gum-man-shows-the-peak-on-the-graph.png';

// @ts-ignore
import gif1 from '@site/static/img/homePage/2023-08-03-bubble-gum-workflow.gif';
// @ts-ignore
import gif2 from '@site/static/img/homePage/2023-08-03-bubble-gum-social-media.gif';
// @ts-ignore
import gif3 from '@site/static/img/homePage/2023-08-03-bubble-gum-financial-statistics.gif';
import Link from '@docusaurus/Link';

interface IImportImage {
  preSrc: string;
  src: {
    height: number;
    width: number;
    images: { height: number; width: number; path: string }[];
    placeholder: string;
    src: string;
    srcSet: string;
    toString: () => string;
  };
}

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  image?: IImportImage;
  gif?: any;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '无需学习，上手即用',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    image: feature1,
    // gif: gif1,
    description: (
      <>
        为非技术人员设计，无需编程或 AI 背景，无论你是新手还是资深运营者，10秒生成高质量文案，立即开始你的自媒体旅程。
      </>
    ),
  },
  {
    title: '专为自媒体而生',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    image: feature2,
    // gif: gif2,
    description: (
      <>此工具的功能和指令设计，主要侧重于自媒体环境，尤其是小红书。未来将扩展到更多平台，满足不同的自媒体运营需求。</>
    ),
  },
  {
    title: '客户成功故事',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    image: feature3,
    // gif: gif3,
    description: (
      <>
        我们的客户已成功利用 AI 工具，在
        <a target="_blank" href="https://www.xiaohongshu.com/user/profile/56cf33c550c4b408633787cf">
          小红书平台「巴黎去哪玩」
        </a>
        上取得了显著成功，这验证了我们产品的实用性和有效性。
      </>
    ),
  },
];

function Feature(props: FeatureItem) {
  const { title, Svg, image, gif, description } = props;
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
        {image && <img src={image.src.src} alt="homepage-feature-1-discover" />}
        {gif && <img src={gif} alt="homepage-feature-1-discover" />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

const people = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          {' '}
          <ul className="divide-y divide-gray-200">
            {people.map((person) => (
              <li key={person.email} className="py-4 flex">
                <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{person.name}</p>
                  <p className="text-sm text-gray-500">{person.email}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="row">
          <header className="bg-blue-500">
            <div className="container mx-auto text-center py-24">
              <h1 className="text-4xl font-bold text-white">{'siteConfig.title'}</h1>
              <p className="text-xl py-6 text-white">{'siteConfig.tagline'}</p>

              <div className="py-10">
                <Link className="bg-white rounded-md text-gray-500 px-4 py-2" to="/docs/intro">
                  Docusaurus Tutorial - 5min ⏱️
                </Link>
              </div>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
}
