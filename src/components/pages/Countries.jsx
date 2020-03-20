import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import { motion } from 'framer-motion';
import { numberWithCommas } from '../../utils/NumbersWithCommas';

export default function Countries() {
	const [countries, setCountries] = useState('');
	// const [filteredCountries, setFilteredCountries] = useState('');
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		getCountries();
	}, []);

	function getCountries() {
		axios
			.get('https://coronavirus-19-api.herokuapp.com/countries')
			.then(res => setCountries(res.data));
	}

	function handleChange(e) {
		setSearchTerm(e.target.value);
	}

	function onSubmit(e) {
		e.preventDefault();
		let newCountries = [];
		for (let i = 0; i <= countries.length; i++) {
			if (
				countries[i] &&
				countries[i].country.toLowerCase().includes(searchTerm.toLowerCase())
			) {
				newCountries.push(countries[i]);
			}
		}
		setCountries(newCountries);
		console.log(newCountries);
	}

	return (
		<div className="py-8">
			{countries !== '' ? (
				<motion.div
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					initial={{ y: 100, opacity: 0 }}
				>
					<h1 className="text-center text-xl md:text-5xl font-bold uppercase text-blue-900">
						Statistics Broken Down by Country
					</h1>

					<form className="w-8/12 mx-auto mt-8 flex" onSubmit={onSubmit}>
						<input
							type="text"
							placeholder="Search for a country..."
							className="border border-2 bg-gray-200 rounded-l px-4 py-2 flex-1 focus:outline-none"
							onChange={handleChange}
						/>
						<button
							type="submit"
							className="bg-blue-900 text-gray-200 px-4 py-2 rounded-r border border-2 border-blue-900 font-medium"
						>
							Search
						</button>
					</form>

					<div className="overflow-scroll">
						<table className="mx-auto w-8/12 mt-8">
							<thead className="border border-2 bg-blue-900">
								<tr className="text-left">
									<th className="px-4 py-2 text-gray-200 font-medium text-lg md:text-2xl">
										Country
									</th>
									<th className="px-4 py-2 text-gray-200 font-medium text-lg md:text-2xl">
										Cases
									</th>
									<th className="px-4 py-2 text-gray-200 font-medium text-lg md:text-2xl">
										Recoverd
									</th>
									<th className="px-4 py-2 text-gray-200 font-medium text-lg md:text-2xl">
										Deaths
									</th>
								</tr>
							</thead>
							<tbody>
								{countries.map(country => (
									<tr
										key={country.country}
										className="text-left border border-2 rounded my-4"
									>
										<th className="pl-2 py-2 font-bold text-lg md:text-2xl text-blue-600 underline">
											<Link to={{ pathname: `/country/${country.country}` }}>
												{country.country}
											</Link>
										</th>
										<th className="md:px-4 py-2 text-red-900  text-lg md:text-xl">
											{' '}
											{numberWithCommas(country.cases)}{' '}
											<span role="img" aria-label="vomit-emoji">
												🤮
											</span>{' '}
										</th>
										<th className="md:px-4 py-2 text-green-900 text-lg md:text-xl">
											{' '}
											{numberWithCommas(country.recovered)}{' '}
											<span role="img" aria-label="happy-face-emoji">
												🙂
											</span>{' '}
										</th>
										<th className="md:px-4 py-2 text-gray-900 text-lg md:text-xl">
											{numberWithCommas(country.deaths)}{' '}
											<span role="img" aria-label="skull-emoji">
												💀
											</span>{' '}
										</th>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</motion.div>
			) : (
				<div className="min-h-screen flex flex-col items-center ">
					<div className="flex-1">
						<Loader type="Grid" color="#2a4365" />
					</div>
				</div>
			)}
		</div>
	);
}
