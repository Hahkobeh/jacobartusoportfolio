import classNames from 'classnames/bind';
import { NextPage } from 'next';
import React from 'react';
import Metadata from '../../components/metadata';
import Navbar from '../../components/navbar';
import styles from './experience.module.scss';

let cn = classNames.bind(styles);

type Props = {};

const Experience: NextPage = (props: Props) => {
	return (
		<>
			<Metadata currentPage='Experience' />
			<Navbar currentPage='Experience' />
			<main>
				<div className={cn('container')}>
					<div className={cn('section')}>
						<ul>
							<li>
								<h1>Next Generation 911 Summer Student</h1>
								<h2>City of Calgary</h2>
								<p>Worked</p>
							</li>
							<li>
								<h1>Tutor</h1>
								<h2>MathPro</h2>
								<p>Worked</p>
							</li>
						</ul>
					</div>
				</div>
			</main>
		</>
	);
};

export default Experience;
