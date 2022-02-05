import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '../components/HomepageFeatures';
import HomeSymbolSVG from '../../static/img/home_bg_symbol.svg';
import ArrowIcon from '../../static/img/icon-arrow.svg';
import GithubIcon from '../../static/img/icon-github.svg';

function HomepageHeader() {
  return (
    <header className='hero heroBanner'>
      <div className="container row hero-text">
        <div className='col col--6 text--left'>
          <h1 hidden>Engula</h1>
          <h2 className="hero__title">Build reliable and cost-effective databases</h2>
          <p className="hero__subtitle">with less effort and more confidence</p>
          <div className='link-buttons'>
            <Link
              className="button button--lg start-button"
              to="/docs/design">
              Design <ArrowIcon style={{width: '24px', height: '24px'}} />
            </Link>
            <Link
              className="button button--primary button--lg"
              to="https://github.com/engula/engula">
              Github <GithubIcon style={{width: '24px', height: '24px'}} />
            </Link>
          </div>
        </div>
        <div className='col col-6'>
          <HomeSymbolSVG />
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Build reliable and cost-effective databases">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
