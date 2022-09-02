import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Close from '../../public/icons8-close.svg';
import Menu from '../../public/icons8-menu.svg';
import styles from './navbar.module.scss';

type Props = {
	current: string;
};




const Navbar = ({ current }: Props) => {
	const [showMenu, setShowMenu] = useState(false);
	const [theme, setTheme] = useState('light');

	const changeTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	return (
		<nav className={styles.container}>
			
			<h1 className={styles.logo}>JA</h1>
			<div className={styles.options}>
				
				<div
					className={styles.menu_icon}
					onClick={() => setShowMenu(!showMenu)}
				>
					
					<Image
						src={showMenu ? Close : Menu}
						alt='menu icon'
						layout='fill'
					/>
				</div>
			</div>
			<ul className=''>
				<li>
					<Link href={'/about'}>About</Link>
				</li>
				<li>Experience</li>
				<li>Skills</li>
				<li>Projects</li>
			</ul>
			<input type='button' onClick={changeTheme} />
		</nav>
	);
};

export default Navbar;
