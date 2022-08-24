import React from 'react';
import styles from './navbar.module.scss';

type Props = {};

const Navbar = (props: Props) => {
	return (
		<nav className={styles.container}>
			<h1 className={styles.logo}>JA</h1>
			<ul className={styles.options}>
				<li className={styles.option}>About</li>
				<li className={styles.option}>Skills</li>
				<li className={styles.option}>Experience</li>
				<li className={styles.option}>Contact</li>
			</ul>
			
		</nav>
	);
};

export default Navbar;
