import React, { useEffect, useState } from 'react';
import { numberWithCommas } from '../utils/NumbersWithCommas';
import axios from 'axios';

export default function GlobalStats() {
	const [stats, setStats] = useState('');

	useEffect(() => {
		axios
			.get('https://coronavirus-19-api.herokuapp.com/all')
			.then(res => setStats(res.data));
	}, []);

	return (
		<div className="bg-blue-900 py-8 min-h-screen">
			{stats !== '' ? (
				<div id="landing" className="my-32 transition ease-in duration-700">
					<h1 className="text-center text-6xl font-bold uppercase text-gray-200">
						Global Statistics on COVID-19
					</h1>
					<div className="w-8/12 mx-auto justify-center flex mt-8">
						<div className="border border-2 flex-1 bg-gray-200 text-red-900 px-8 py-6 text-center rounded-l">
							<p className="text-4xl">
								<span role="img" aria-label="vomit-emoji">
									🤮{' '}
								</span>
							</p>
							<p className="text-4xl font-bold">
								{numberWithCommas(stats.cases)}
							</p>
							<p className="uppercase font-medium text-2xl">cases</p>
						</div>
						<div className="border border-2 flex-1 bg-gray-200 text-green-900 px-8 py-6 text-center">
							<p className="text-4xl">
								<span role="img" aria-label="happy-face-emoji">
									🙂{' '}
								</span>
							</p>
							<p className="text-4xl font-bold">
								{numberWithCommas(stats.recovered)}
							</p>
							<span className="text-md font-semibold">
								{((stats.recovered / stats.cases) * 100).toFixed(1)} %
							</span>
							<p className="uppercase font-medium text-2xl">recovered</p>
						</div>
						<div className="border border-2 flex-1 bg-gray-200 text-gray-900 px-8 py-6 text-center rounded-r">
							<p className="text-4xl">
								<span role="img" aria-label="skull-emoji">
									💀{' '}
								</span>
							</p>
							<p className="text-4xl font-bold">
								{numberWithCommas(stats.deaths)}
							</p>
							<span className="text-md font-semibold">
								{((stats.deaths / stats.cases) * 100).toFixed(1)} %
							</span>
							<p className="uppercase font-medium text-2xl">deaths</p>
						</div>
					</div>
				</div>
			) : (
				<div className="bg-blue-900 py-8 min-h-screen "></div>
			)}
		</div>
	);
}
