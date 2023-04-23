import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '浮动窗口提供直观的桌面可视化',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>我们提供具有直观的桌面可视化功能的浮动窗口，方便用户简单、轻松地操作。无需过多学习，即可上手使用。</>
    ),
  },
  {
    title: '高扩展性和定制性，满足不同需求',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: <>该工具拥有高度的可扩展性和定制性，可以轻松加入自定义指令以满足不同的业务需求。</>,
  },
  {
    title: '本地数据存储更安全',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <>该系统所有资料和信息都存储在本地，不需要担心数据泄漏的风险。用户可以放心使用，并保障数据安全性。</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
