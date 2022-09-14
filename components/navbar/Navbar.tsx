import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Close from '../../public/icons8-close.svg';
import Menu from '../../public/icons8-menu.svg';
import styles from './navbar.module.scss';

let cn = classNames.bind(styles);

type Props = {
	currentPage: string;
};

const Navbar = ({ currentPage }: Props) => {
	const [showMenu, setShowMenu] = useState(false);
	const [theme, setTheme] = useState('light');

	const changeTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	const selected = (page: string) => {
		return page === currentPage ? ' ' + styles.active : '';
	};

	return (
		<nav className={cn('container')}>
			<Link href={'/'}>
				<h1
					className={cn('logo', {
						logo_menu: showMenu,
					})}
				>
					Jacob Artuso
				</h1>
			</Link>
			<div
				className={cn('icon_menu')}
				onClick={() => setShowMenu(!showMenu)}
			>
				<Image
					src={showMenu ? Close : Menu}
					alt='menu icon'
					layout='fill'
				/>
			</div>
			<ul className={cn('options', { options_menu: showMenu })}>
				<li className={cn('option', { active: selected('About') })}>
					<Link href={'/about'}>
						<h2>About</h2>
					</Link>
				</li>
				<li
					className={cn('option', { active: selected('Experience') })}
				>
					<Link href={'/experience'}>
						<h2>Experience</h2>
					</Link>
				</li>
				<li className={cn('option', { active: selected('Skills') })}>
					<Link href={'/skills'}>
						<h2>Skills</h2>
					</Link>
				</li>
				<li className={cn('option', { active: selected('Projects') })}>
					<Link href={'/projects'}>
						<h2>Projects</h2>
					</Link>
				</li>
				<li className={cn('option', { active: selected('Contact') })}>
					<Link href={'/contact'}>
						<h2>Contact</h2>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
