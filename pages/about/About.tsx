import { NextPage } from 'next';
import React from 'react';
import Metadata from '../../components/metadata';
import Navbar from '../../components/navbar';

type Props = {};

const About: NextPage = (props: Props) => {
	return (
		<>
			<Metadata currentPage='About' />
			<Navbar currentPage='About' />
		</>
	);
};

export default About;
