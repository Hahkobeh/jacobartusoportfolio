import Image from 'next/image';
import React, { useState } from 'react';
import Close from '../../public/icons8-close.svg';
import Menu from '../../public/icons8-menu.svg';
import styles from './navbar.module.scss';
type Props = {};

const Navbar = (props: Props) => {
	const [showMenu, setShowMenu] = useState(false);

	const menuAffect = (className: string) => {
		return showMenu ? ' ' + styles['modify_' + className] : '';
	};

	return (
		<nav className={styles.container}>
			<div className={styles.menu + menuAffect('menu')}>hello</div>
			<h1 className={styles.logo + menuAffect('logo')}>JA</h1>
			<div
				className={
					styles.navigation_options + menuAffect('navigation_options')
				}
			>
				<div
					className={styles.menu_icon + menuAffect('menu_icon')}
					onClick={() => setShowMenu(!showMenu)}
				>
					<Image
						src={showMenu ? Close : Menu}
						alt='menu icon'
						layout='fill'
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
