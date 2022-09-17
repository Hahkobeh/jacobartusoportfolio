import classNames from 'classnames/bind';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Metadata from '../components/metadata';
import Navbar from '../components/navbar';
import Profile from '../public/70993002.jpeg';
import styles from './home.module.scss';

let cn = classNames.bind(styles);

const Home: NextPage = () => {
	return (
		<>
			<Metadata currentPage='Home' />

			<main>
				<Navbar currentPage='Home' />
				<div className={cn('container')}>
					<section className={cn('section')} id={cn('one')}>
						<div className={cn('profile')}>
							<div className={cn('circle')} id={cn('c_1')} />
							<div className={cn('circle')} id={cn('c_2')} />
							<div className={cn('selfie')}>
								<Image
									src={Profile}
									className={cn('selfie')}
									alt='profile picture'
									layout='fill'
								/>
							</div>
						</div>
						<div className={cn('text')}>
							<p>Hello, I'm</p>
							<h1>Jacob Artuso</h1>
							<p>Nice to meet you.</p>
						</div>
					</section>

					<section className={cn('section')} id={cn('two')}>
						<p>
							I am a 4th year software engineering and commerce
							student at the University of Calgary.
						</p>
					</section>
					<section className={cn('section')} id={cn('three')}>
						<p>
							I am a 4th year software engineering and commerce
							student at the University of Calgary.
						</p>
					</section>
					<section className={cn('section')} id={cn('four')}>
						<p>
							I am a 4th year software engineering and commerce
							student at the University of Calgary.
						</p>
					</section>
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
