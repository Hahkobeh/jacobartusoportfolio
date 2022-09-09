/* eslint-disable react/no-unescaped-entities */
import classNames from 'classnames/bind';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Metadata from '../components/metadata';
import Navbar from '../components/navbar';
import styles from './home.module.scss';

let cn = classNames.bind(styles);

const Home: NextPage = () => {
	return (
		<>
			<Metadata currentPage='Home' />

			<main>
				<Navbar currentPage='Home' />
				<div className={cn('container')}>
					<div className={cn('section')}>
						<h2>Hello, I'm</h2>
						<h1>Jacob Artuso</h1>
						<h3>Nice to meet you</h3>
					</div>
				</div>
				<div className={cn('container')}>
					<div className={cn('section')}>
						<h2>Hello, I'm</h2>
						<h1>Jacob Artuso</h1>
						<h3>Nice to meet you</h3>
					</div>
				</div>
			</main>

			<footer></footer>
		</>
	);
};

export default Home;

{
	/* <a
							target='_blank'
							href='https://icons8.com/icon/84026/menu'
							rel='noreferrer'
						>
							Menu
						</a>{' '}
						icon by{' '}
						<a
							target='_blank'
							href='https://icons8.com'
							rel='noreferrer'
						>
							Icons8
						</a> */
}
