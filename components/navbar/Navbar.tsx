import Image from 'next/image';
import React from 'react';
import Menu from '../../public/icons8-menu.svg';
import styles from './navbar.module.scss';
type Props = {};

const Navbar = (props: Props) => {
	return (
		<nav className={styles.container}>
			<h1 className={styles.logo}>JA</h1>

			<div className={styles.navigate_options}>
				<div className={styles.menu_icon}>
					<Image
						src={Menu}
						alt='menu icon'
						layout='fill'
						objectFit='cover'
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
