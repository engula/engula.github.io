import React from "react";
import Link from '@docusaurus/Link';

const HomePageTrySection = () => {
	return <div className='homepage-try text--center'>
		<h2 className="title">Try Engula now!</h2>
		<div>
			<Link
				className="button"
				to="/docs/intro">
				Quickly Start
			</Link>
		</div>
	</div>
}

export default HomePageTrySection;