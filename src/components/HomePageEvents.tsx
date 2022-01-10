import React from 'react';

type NewsItem = {
  title: string;
  description: JSX.Element;
  link: string;
};

const NewsList: NewsItem[] = [
  {
    title: 'Event-1',
    link: 'https://engula.io/',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Event-2',
    link: 'https://engula.io/',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the docs directory.
      </>
    ),
  },
  {
    title: 'Event-3',
    link: 'https://engula.io/',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Event-4',
    link: 'https://engula.io/',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Event-5',
    link: 'https://engula.io/',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the docs directory.
      </>
    ),
  },
  {
    title: 'Event-6',
    link: 'https://engula.io/',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ title, link, description }: NewsItem) {
  return (
    <div className='col col--4'>
      <div className="text--left event-item">
        <h3><a href={link}>{title}</a></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className='section homepage-events'>
      <div className="container">
        <div className="w-100 text--center section-title">
          <h2>Events</h2>
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
