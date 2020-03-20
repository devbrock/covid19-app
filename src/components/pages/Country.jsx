import React, { useEffect, useState } from 'react';
import { numberWithCommas } from '../../utils/NumbersWithCommas';
import Loader from 'react-loader-spinner';
import Axios from 'axios';
import { motion } from 'framer-motion';

export default function Country(props) {
	const { country } = props.match.params;
	const [countryStats, setCountryStats] = useState('');

	useEffect(() => {
		Axios.get(
			`https://coronavirus-19-api.herokuapp.com/countries/${country}`
		).then(res => setCountryStats(res.data));
	}, [country]);

	const {
		country: name,
		cases,
		todayCases,
		deaths,
		todayDeaths,
		recovered,
		active,
		critical,
		casesPerOneMillion,
	} = countryStats;

	return (
		<div className="w-8/12 mx-auto my-8">
			{countryStats !== '' ? (
				<motion.div
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					initial={{ y: 100, opacity: 0 }}
				>
					<h1 className="text-center text-xl md:text-5xl font-bold text-blue-900">
						{name}
					</h1>
					{/* Totals   */}
					<div className="mt-8">
						<h3 className="justify-center text-gray-900 font-semibold text-lg md:text-2xl ">
							Totals
						</h3>
						<div className="justify-center flex mt-4">
							<div className="border border-2 flex-1 bg-gray-200 text-red-900 px-3 py-1 md:px-8 md:py-6 text-center rounded-l">
								<p className="text-lg md:text-4xl">
									<span role="img" aria-label="vomit-emoji">
										🤮{' '}
									</span>
								</p>
								<p className="text-lg md:text-4xl font-bold">
									{numberWithCommas(cases)}
								</p>
								<p className="uppercase font-medium text-md md:text-2xl">
									cases
								</p>
							</div>
							<div className="border border-2 flex-1 bg-gray-200 text-green-900 px-3 py-1 md:px-8 md:py-6 text-center">
								<p className="text-lg md:text-4xl">
									<span role="img" aria-label="happy-face-emoji">
										🙂{' '}
									</span>
								</p>
								<p className="text-lg md:text-4xl font-bold">
									{numberWithCommas(recovered)}
								</p>
								<span className="text-md font-semibold">
									{((recovered / cases) * 100).toFixed(1)} %
								</span>
								<p className="uppercase font-medium text-md md:text-2xl">
									recovered
								</p>
							</div>
							<div className="border border-2 flex-1 bg-gray-200 text-gray-900 px-3 py-1 md:px-8 md:py-6 text-center rounded-r">
								<p className="text-lg md:text-4xl">
									<span role="img" aria-label="skull-emoji">
										💀{' '}
									</span>
								</p>
								<p className="text-lg md:text-4xl font-bold">
									{numberWithCommas(deaths)}
								</p>
								<span className="text-md font-semibold">
									{((deaths / cases) * 100).toFixed(1)} %
								</span>
								<p className="uppercase font-medium text-md md:text-2xl">
									deaths
								</p>
							</div>
						</div>
					</div>
					{/* Today */}
					<div className="mt-16">
						<h3 className="justify-center text-gray-900 font-semibold text-lg md:text-2xl ">
							Today
						</h3>
						<div className="justify-center flex mt-4">
							<div className="border border-2 flex-1 bg-gray-200 text-red-900 px-3 py-1 md:px-8 md:py-6 text-center rounded-l">
								<p className="text-lg md:text-4xl">
									<span role="img" aria-label="vomit-emoji">
										🤮{' '}
									</span>
								</p>
								<p className="text-lg md:text-4xl font-bold">
									{numberWithCommas(todayCases)}
								</p>
								<p className="uppercase font-medium text-md md:text-2xl">
									cases
								</p>
							</div>
							<div className="border border-2 flex-1 bg-gray-200 text-gray-900 px-3 py-1 md:px-8 md:py-6 text-center rounded-r">
								<p className="text-lg md:text-4xl">
									<span role="img" aria-label="skull-emoji">
										💀{' '}
									</span>
								</p>
								<p className="text-lg md:text-4xl font-bold">
									{numberWithCommas(todayDeaths)}
								</p>
								<p className="uppercase font-medium text-md md:text-2xl">
									deaths
								</p>
							</div>
						</div>
					</div>
					{/* Other */}
					<div className="mt-16">
						<h3 className="justify-center text-gray-900 font-semibold text-2xl ">
							Other Stats
						</h3>
						<div className="justify-center flex mt-4">
							<div className="border border-2 flex-1 bg-gray-200 text-red-900 px-3 py-1 md:px-8 md:py-6 text-center rounded-l">
								<p className="text-lg md:text-4xl">
									<span role="img" aria-label="vomit-emoji">
										🏥
									</span>
								</p>
								<p className="text-lg md:text-4xl font-bold">
									{numberWithCommas(active)}
								</p>
								<p className="uppercase font-medium text-md md:text-2xl">
									active
								</p>
							</div>
							<div className="border border-2 flex-1 bg-gray-200 text-red-700 px-3 py-1 md:px-8 md:py-6 text-center rounded-r">
								<p className="text-lg md:text-4xl">
									<span role="img" aria-label="skull-emoji">
										💉{' '}
									</span>
								</p>
								<p className="text-lg md:text-4xl font-bold">
									{numberWithCommas(critical)}
								</p>
								<p className="uppercase font-medium text-md md:text-2xl">
									critical
								</p>
							</div>
							<div className="border border-2 flex-1 bg-gray-200 text-gray-900 px-3 py-1 md:px-8 md:py-6 text-center rounded-r">
								<p className="text-lg md:text-4xl">
									<span role="img" aria-label="skull-emoji">
										💀{' '}
									</span>
								</p>
								<p className="text-lg md:text-4xl font-bold">
									{numberWithCommas(casesPerOneMillion)}
								</p>
								<p className="uppercase font-medium text-md md:text-2xl">
									Cases Per Million
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			) : (
				<div className="min-h-screen flex flex-col items-center">
					<div className="flex-1">
						<Loader type="Grid" color="#2a4365" />
					</div>
				</div>
			)}
		</div>
	);
}
