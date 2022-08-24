import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/navbar';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Jacob Artuso</title>
				<meta
					name='description'
					content='Jacob Artuso Portfolio Site'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Navbar />
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
		</div>
	);
};

export default Home;
