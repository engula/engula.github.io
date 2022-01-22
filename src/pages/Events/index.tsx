import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import AddressIcon from '../../../static/img/address_icon.svg'
import DateIcon from '../../../static/img/date_icon.svg'

type EventItem = {
	title: string;
	link: string;
	date: string;
	image: string;
	address?: string;
};

const EventList: EventItem[] = [
	{
		title: 'Slack Sapce',
		link: 'https://engula.io/',
		date: '17/19/2021',
		image: '/img/events/event_1.jpeg'
	},
	{
		title: 'Slack Sapce',
		link: 'https://engula.io/',
		date: '17/19/2021',
		image: '/img/events/event_1.jpeg',
		address: 'Sun system, Earth'
	},
	{
		title: 'Slack Sapce',
		link: 'https://engula.io/',
		date: '17/19/2021',
		image: '/img/events/event_1.jpeg'
	},
	{
		title: 'Slack Sapce',
		link: 'https://engula.io/',
		date: '17/19/2021',
		image: '/img/events/event_1.jpeg',
	},
];

function Event({ title, link, date, address, image }: EventItem) {
	return (
		<div className="text--left event-item">
			<div>
				<a href={link}><h2>{title}</h2></a>
				<div className='info-text'><DateIcon /><span>{date}</span></div>
				{
					address && <div className='info-text'><AddressIcon /><span>{address}</span></div>
				}
			</div>
			<img src={image} />
		</div>
	);
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description="Build reliable and cost-effective databases">
			<div className='event-page-container container'>
				<h1 className={styles.pageTitle}>Events</h1>
				<p>Activities and events of Engula.</p>
				<div className='event-list'>
					{
						EventList.map(item => Event(item))
					}
				</div>
			</div>
		</Layout>
	);
}
