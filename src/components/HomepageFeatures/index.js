import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '知识存档',
    Svg: require('@site/static/img/undraw_save.svg').default,
    description: (
      <>
        平时学习的积累与总结，搜集多方资料而得，仅作存档笔记之用。
      </>
    ),
  },
  {
    title: '书签',
    Svg: require('@site/static/img/undraw_mark.svg').default,
    description: (
      <>
        搜集各类网站，有极客团队、名人博客、官方网站、软件工具等等。免去上搜索引擎的时间，也避免被误导。
      </>
    ),
  },
  {
    title: '博客',
    Svg: require('@site/static/img/undraw_blog.svg').default,
    description: (
      <>
        这里有我的想法和创新，用来记录我的成长。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
