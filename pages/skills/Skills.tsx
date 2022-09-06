import { NextPage } from 'next';
import React from 'react';
import Metadata from '../../components/metadata';
import Navbar from '../../components/navbar';

type Props = {};

const Skills: NextPage = (props: Props) => {
	return (
		<>
			<Metadata currentPage='Skills' />
			<Navbar currentPage='Skills' />
		</>
	);
};

export default Skills;
