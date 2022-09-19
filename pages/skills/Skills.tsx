import classNames from 'classnames/bind';
import { NextPage } from 'next';
import React from 'react';
import Metadata from '../../components/metadata';
import Navbar from '../../components/navbar';
import styles from './skills.module.scss';

let cn = classNames.bind(styles);

type Props = {};

const Skills: NextPage = (props: Props) => {
	return (
		<>
			<Metadata currentPage='Skills' />
			<Navbar currentPage='Skills' />
			<main>
				<div className={cn('container')}>
					<div className={cn('section')}>
						<h1>Languages</h1>
						<ul>
							<li>C</li>
							<li>C++</li>
							<li>Java</li>
							<li>Javascript</li>
							<li>Typescript</li>
							<li>SQL</li>
						</ul>
					</div>
					<div className={cn('section')}>
						<h1>Technology</h1>
						<ul>
							<li>React</li>
							<li>Next.js</li>
							<li>Gradle</li>
							<li></li>
							<li></li>
						</ul>
					</div>
				</div>
			</main>
		</>
	);
};

export default Skills;
