import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import DateIcon from '../../static/img/date_icon.svg';
import * as marked from 'marked';

type EventItem = {
	title: string;
	link: string;
	date: string;
	content?: string;
};

function Event({ title, link, date, content }: EventItem) {
	return (
		<div className="text--left event-item" key={link}>
			<div>
				<a href={link}><h2>{title}</h2></a>
				<div className='info-text'><DateIcon /><span>{date}</span></div>
			</div>
			<div className='content'dangerouslySetInnerHTML={{__html: marked.parse(content)}} ></div>
		</div>
	);
}

export default function Home({ events }): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description="Build reliable and cost-effective databases">
			<div className='event-page-container container'>
				<h1 className='pageTitle'>Events</h1>
				<p>Activities and events of Engula.</p>
				<div className='event-list'>
					{
						events?.map(item => Event(item))
					}
				</div>
			</div>
		</Layout>
	);
}
