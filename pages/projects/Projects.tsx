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
		</>
	);
};

export default Projects;
