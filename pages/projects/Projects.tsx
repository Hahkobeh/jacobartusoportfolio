import classNames from 'classnames/bind';
import { NextPage } from 'next';
import React from 'react';
import Metadata from '../../components/metadata';
import Navbar from '../../components/navbar';
import styles from './projects.module.scss';

let cn = classNames.bind(styles);

type Props = {};

const Projects: NextPage = (props: Props) => {
	return (
		<>
			<Metadata currentPage='Projects' />
			<Navbar currentPage='Projects' />
			<main>
				<div className={cn('container')}>
					<div className={cn('section')}>
						<ul>
							<li>VCPDR</li>
							<li>LifeXP</li>
							<li>TxtHub</li>
							<li>Property</li>
							<li>Furniture</li>
						</ul>
					</div>
				</div>
			</main>
		</>
	);
};

export default Projects;
