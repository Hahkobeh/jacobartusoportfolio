import { NextPage } from 'next';
import React from 'react';
import Metadata from '../../components/metadata';
import Navbar from '../../components/navbar';

type Props = {};

const Contact: NextPage = (props: Props) => {
	return (
		<>
			<Metadata currentPage='Contact' />
			<Navbar currentPage='Contact' />
			<main>
				<div>
					<p></p>
				</div>
			</main>
		</>
	);
};

export default Contact;
