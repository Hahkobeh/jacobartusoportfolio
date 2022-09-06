import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Metadata from '../components/metadata';
import Navbar from '../components/navbar';

const Home: NextPage = () => {
	return (
		<>
			<Metadata currentPage='Home' />

			<main>
				<Navbar currentPage='Home' />
				<h1>d</h1>
				<h1>d</h1>
				<h1>d</h1>
				<a
					target='_blank'
					href='https://icons8.com/icon/84026/menu'
					rel='noreferrer'
				>
					Menu
				</a>{' '}
				icon by{' '}
				<a target='_blank' href='https://icons8.com' rel='noreferrer'>
					Icons8
				</a>
			</main>

			<footer></footer>
		</>
	);
};

export default Home;
