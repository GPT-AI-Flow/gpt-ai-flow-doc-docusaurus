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
    title: '浮动窗口提供直观的桌面可视化',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    image: feature1,
    description: (
      <>我们提供具有直观的桌面可视化功能的浮动窗口，方便用户简单、轻松地操作。无需过多学习，即可上手使用。</>
    ),
  },
  {
    title: '高扩展性和定制性，满足不同需求',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    image: feature2,
    description: <>该工具拥有高度的可扩展性和定制性，可以轻松加入自定义指令以满足不同的业务需求。</>,
  },
  {
    title: '本地数据存储更安全',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    image: feature3,
    description: <>该系统所有资料和信息都存储在本地，不需要担心数据泄漏的风险。用户可以放心使用，并保障数据安全性。</>,
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
