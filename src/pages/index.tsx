import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '../components/HomepageFeatures';
import ArrowIcon from '../../static/img/icon-arrow.svg';
import GithubIcon from '../../static/img/icon-github.svg';

function HomepageHeader() {
  return (
    <header className='hero heroBanner'>
      <div className="container row hero-text">
        <div className='col banner-text'>
          <h1 hidden>Engula</h1>
          <h2 className="hero__title">A persistent data structure store</h2>
          <p className="hero__subtitle">used as a database, cache, and storage engine</p>
          <div className='link-buttons'>
            <Link
              className="button button--lg start-button"
              to="/blog/tutorial-0.2">
              Get Started <ArrowIcon style={{ width: '24px', height: '24px' }} />
            </Link>
            <Link
              className="button button--lg button--primary"
              to="https://github.com/engula/engula">
              Github <GithubIcon style={{ width: '24px', height: '24px' }} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
