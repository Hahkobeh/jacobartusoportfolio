import { NextPage } from 'next';
import React from 'react';
import Metadata from '../../components/metadata';
import Navbar from '../../components/navbar';

type Props = {};

const Experience: NextPage = (props: Props) => {
	return (
		<>
			<Metadata currentPage='Experience' />
			<Navbar currentPage='Experience' />
			<main>
				<div>
					<ul>
						<li>Calgary 911</li>
						<li>Tutor</li>
					</ul>
				</div>
			</main>
		</>
	);
};

export default Experience;
