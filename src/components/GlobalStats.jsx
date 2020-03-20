import React, { useEffect, useState } from 'react';
import { numberWithCommas } from '../utils/NumbersWithCommas';
import axios from 'axios';
import { motion } from 'framer-motion';

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
				<motion.div
					className="sm:my-4 md:my-32"
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					initial={{ y: 100, opacity: 0 }}
				>
					<h1 className="text-center text-4xl md:text-6xl font-bold uppercase text-gray-200 px-4">
						Global Statistics on COVID-19
					</h1>
					<div className="w-8/12 mx-auto justify-center sm:flex mt-8 shadow-lg rounded">
						<div className="border border-2 bg-gray-200 flex-1 text-red-900 px-8 py-6 text-center md:rounded-l">
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
						<div className="border border-2 bg-gray-200 flex-1 text-green-900 px-8 py-6 text-center">
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
						<div className="border border-2 bg-gray-200 flex-1 text-gray-900 px-8 py-6 text-center md:rounded-r">
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
				</motion.div>
			) : (
				<div className="bg-blue-900 py-8 min-h-screen "></div>
			)}
		</div>
	);
}
