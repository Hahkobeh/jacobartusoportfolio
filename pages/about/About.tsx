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
			<main>
				<p>
					I am a 4th year software engineering and commerce student at
					the University of Calgary. I'm an avid fan of jazz and
					classical music. And I play trombone and piano.
				</p>
			</main>
		</>
	);
};

export default About;
