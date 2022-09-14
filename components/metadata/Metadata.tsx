import Head from 'next/head';
import React from 'react';

type Props = {
	currentPage: string;
};

const Metadata = ({ currentPage }: Props) => {
	console.log(currentPage);
	return (
		<Head>
			<title>JA - {currentPage}</title>
			<meta name='description' content='Jacob Artuso Portfolio Site' />
			<link rel='icon' href='/favicon.ico' />
		</Head>
	);
};

export default React.memo(Metadata);
