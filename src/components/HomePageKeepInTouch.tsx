import React from 'react';
import ArrowIcon from '../../static/img/arrow_up.svg';

type NewsItem = {
  title: string;
  link: string;
};

const NewsList: NewsItem[] = [
  {
    title: 'Slack Sapce',
    link: 'https://engula.io/',
  },
  {
    title: 'Slack Sapce',
    link: 'https://engula.io/',
  },
  {
    title: 'Slack Sapce',
    link: 'https://engula.io/',
  },
  {
    title: 'Slack Sapce',
    link: 'https://engula.io/',
  },
];

function Feature({ title, link }: NewsItem) {
  return (
    <div className='col col--3'>
      <div className="text--left touch-item">
        <a href={link}>{title}</a>
        <ArrowIcon style={{ width: '24px'}} className='touch-arrow-icon' />
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className='section keep-intouch'>
      <div className="container">
        <div className="w-100 text--center section-title">
          <h2>Keep In Touch</h2>
        </div>
        <div className="row">
          {NewsList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
