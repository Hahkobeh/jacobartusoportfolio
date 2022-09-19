import classNames from 'classnames/bind';
import { NextPage } from 'next';
import React from 'react';
import Metadata from '../../components/metadata';
import Navbar from '../../components/navbar';
import styles from './contact.module.scss';

let cn = classNames.bind(styles);

type Props = {};

const Contact: NextPage = (props: Props) => {
	return (
		<>
			<Metadata currentPage='Contact' />
			<Navbar currentPage='Contact' />
			<main>
				<div className={cn('container')}>
					<div className={cn('section')}>
						<p></p>
					</div>
				</div>
			</main>
		</>
	);
};

export default Contact;
