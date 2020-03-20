import React from 'react';

export default function About() {
	return (
		<div className="w-8/12 mx-auto my-8 leading-loose">
			<h1 className="text-4xl font-bold text-blue-900 uppercase">
				About COVID-19
			</h1>
			<p className="text-lg font-medium text-gray-700 mt-4">
				Coronavirus disease (COVID-19) is an infectious disease caused by a new
				virus. The disease causes respiratory illness (like the flu) with
				symptoms such as a cough, fever, and in more severe cases, difficulty
				breathing. You can protect yourself by washing your hands frequently,
				avoiding touching your face, and avoiding close contact (1 meter or 3
				feet) with people who are unwell.
			</p>
			<h2 className="text-2xl font-bold text-blue-900 uppercase mt-8">
				How Does COVID-19 Spread?
			</h2>
			<p className="text-lg font-medium text-gray-700">
				Coronavirus disease spreads primarily through contact with an infected
				person when they cough or sneeze. It also spreads when a person touches
				a surface or object that has the virus on it, then touches their eyes,
				nose, or mouth.
			</p>
			<h2 className="text-2xl font-bold text-blue-900 uppercase mt-8">
				Sympotoms
			</h2>
			<div
				className="bg-yellow-100 border-l-4 border-yellow-500 text-gray-700 p-4"
				role="alert"
			>
				<p className="font-bold">Call Your Doctor:</p>
				<p>
					If you think you have been exposed to COVID-19 and develop a fever and
					symptoms, such as cough or difficulty breathing, call your healthcare
					provider for medical advice.
				</p>
			</div>
			<p className="text-lg font-medium text-gray-700">
				If you develop emergency warning signs for COVID-19 get medical
				attention immediately.
			</p>
			Emergency warning signs include*:
			<ul className="text-lg font-medium text-gray-700 list-disc list-inside">
				<li>Difficulty breathing or shortness of breath</li>
				<li>Persistent pain or pressure in the chest</li>
				<li>New confusion or inability to arouse </li>
				<li>Bluish lips or face</li>
				<span className="text-md text-gray-600">
					*This list is not all inclusive. Please consult your medical provider
					for any other symptoms that are severe or concerning.{' '}
				</span>
			</ul>
			<div className="mt-8">
				<a
					href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 font-bold text-lg underline uppercase"
				>
					More Information About COVID-19
				</a>
			</div>
			<h3 className="text-xl font-bold text-blue-900 uppercase mt-8">
				How are we getting this data?
			</h3>
			<p className="text-lg font-medium text-gray-700">
				This application ingests data from{' '}
				<a
					href="https://github.com/javieraviles/covidAPI"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500"
				>
					this API
				</a>
				, which scrapes data from{' '}
				<a
					href="https://www.worldometers.info/coronavirus/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500"
				>
					this source
				</a>
				.
			</p>
		</div>
	);
}
