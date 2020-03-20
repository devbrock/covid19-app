import React from 'react';
import { FaGithub } from 'react-icons/fa';
export default function Navbar() {
	return (
		<nav className="bg-blue-900 h-16 py-4 flex  align-middle items-center">
			<ul className="flex align-middle items-center">
				<li className="mx-4 font-bold text-xl text-gray-200">
					<a href="/">
						<span role="img" aria-label="bar-chart-emoji">
							📊
						</span>{' '}
						COVID-19 STATS
					</a>
				</li>
				<li className="mx-4 font-medium text-lg text-gray-200">
					<a href="/countries">Countries</a>
				</li>
				<li className="mx-4 font-medium text-lg text-gray-200">
					<a href="/about">About</a>
				</li>
			</ul>
			<div className="font-bold text-gray-200 ml-auto mr-4">
				<a
					href="https://github.com/devbrock/covid19-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub />
				</a>
			</div>
		</nav>
	);
}
