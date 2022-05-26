import React from 'react';
import clsx from 'clsx';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to use',
    image: '/img/feature-1.svg',
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Highly scalable',
    image: '/img/feature-2.svg',
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Flexible data API',
    image: '/img/feature-3.svg',
    description: (
      <>
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
          <h2>Features</h2>
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
