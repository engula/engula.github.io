import React from 'react';
import clsx from 'clsx';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Elastic',
    image: '/img/feature_1.svg',
    description: (
      <>
       takes advantage of elastic resources on the cloud
      </>
    ),
  },
  {
    title: 'Adaptive',
    image: '/img/feature_2.svg',
    description: (
      <>
        adapts to dynamic workloads and diverse applications
      </>
    ),
  },
  {
    title: 'Extensible',
    image: '/img/feature_3.svg',
    description: (
      <>
        provides pluggable interfaces and implementations for customization
      </>
    ),
  },
  {
    title: 'Platform independent',
    image: '/img/feature_3.svg',
    description: (
      <>
       allows flexible deployments on local hosts, on-premise servers, and cloud platforms
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--3', 'feature-item')}>
      <div className='feature-inner'>
        <div className="text--left">
          <img className='feature-icon' alt={title} src={image} />
        </div>
        <div className="text--left feature-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className='section homepage-features'>
      <div className="container">
        <div className="w-100 text--center section-title">
          <h2>Design Goals</h2>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
