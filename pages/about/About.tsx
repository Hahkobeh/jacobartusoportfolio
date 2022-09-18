import classNames from 'classnames/bind';
import { NextPage } from 'next';
import React from 'react';
import Metadata from '../../components/metadata';
import Navbar from '../../components/navbar';
import styles from './about.module.scss';

let cn = classNames.bind(styles);

type Props = {};

const About: NextPage = (props: Props) => {
	return (
		<>
			<Metadata currentPage='About' />
			<Navbar currentPage='About' />
			<main>
				<div className={cn('container')}>
					<div className={cn('section')}>
						<p>
							I am a 4th year software engineering and commerce
							student at the University of Calgary. I'm an avid
							fan of jazz and classical music. And I play trombone
							and piano.
						</p>
					</div>
					<div className={cn('section')}>
						<p>
							I amsddsz and classical music. And I play trombone
							and piano.
						</p>
					</div>
				</div>
			</main>
		</>
	);
};

export default About;
