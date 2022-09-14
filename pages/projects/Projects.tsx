import { NextPage } from 'next';
import React from 'react';
import Metadata from '../../components/metadata';
import Navbar from '../../components/navbar';

type Props = {};

const Projects: NextPage = (props: Props) => {
	return (
		<>
			<Metadata currentPage='Projects' />
			<Navbar currentPage='Projects' />
			<main>
				<div>
					<ul>
						<li>VCPDR</li>
						<li>LifeXP</li>
						<li>TxtHub</li>
						<li>Property</li>
						<li>Furniture</li>
					</ul>
				</div>
			</main>
		</>
	);
};

export default Projects;
