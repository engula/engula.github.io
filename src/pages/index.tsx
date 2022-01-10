import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomePageEvents from '../components/HomePageEvents';
import KeepInTouch from '../components/HomePageKeepInTouch';
import HomePageTry from '../components/HomePageTry';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container row hero-text align-left">
        <div className='col col--12 text--left'>
          <h1 hidden>Engula</h1>
          <h2 className="hero__title">Build reliable and cost-effective databases</h2>
          <p className="hero__subtitle">with less effort and more confidence</p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              Getting Started
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
      title={`Hello from ${siteConfig.title}`}
      description="Build reliable and cost-effective databases">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomePageEvents />
        <KeepInTouch />
        <HomePageTry />
      </main>
    </Layout>
  );
}
