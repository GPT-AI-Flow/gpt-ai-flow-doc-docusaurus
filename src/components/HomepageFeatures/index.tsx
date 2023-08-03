import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// @ts-ignore
import feature1 from '@site/static/img/homePage/2023-05-03-bubble-gum-web-design-visualisation.png';
// @ts-ignore
import feature2 from '@site/static/img/homePage/2023-05-03-bubble-gum-online-meeting-between-the-team-extensions-and-customisation.png';
// @ts-ignore
import feature3 from '@site/static/img/homePage/2023-05-03-bubble-gum-man-with-a-tablet-checks-the-server-operation-local-data-security.png';

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
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '无需学习，上手即用',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    image: feature1,
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
    description: (
      <>此工具的功能和指令设计，主要侧重于自媒体环境，尤其是小红书。未来将扩展到更多平台，满足不同的自媒体运营需求。</>
    ),
  },
  {
    title: '客户成功故事',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    image: feature3,
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
  const { title, Svg, image, description } = props;
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
        {image && <img src={image.src.src} alt="homepage-feature-1-discover" />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
