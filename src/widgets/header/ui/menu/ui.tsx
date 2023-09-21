'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

import { $headerMenu } from '../../store'

import { menuItems } from './config'
import styles from './styles.module.scss'

export function Menu() {
	const { isHeaderMenuOpen } = $headerMenu.getState()
	const pathname = usePathname()

	return (
		<div className={clsx(styles.container, { [styles.open]: isHeaderMenuOpen })}>
			<nav className={styles.content}>
				<ul className={styles.list}>
					{menuItems.map((menuItem) => (
						<Link key={menuItem.label} href={menuItem.url} className={styles.item}>
							{menuItem.label}
						</Link>
					))}
				</ul>
			</nav>
		</div>
	)
}