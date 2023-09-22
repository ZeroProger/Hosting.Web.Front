'use client'

import clsx from 'clsx'
import { useStore } from 'effector-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { $userServers } from '@/entities/server/model'

import { ServerSelect } from '@/widgets/server/server-select'

import { $headerMenu } from '../../store'

import { menuItems } from './config'
import styles from './styles.module.scss'

export function Menu() {
	const { isHeaderMenuOpen } = useStore($headerMenu)
	const userServers = useStore($userServers)
	const pathname = usePathname()

	return (
		<div className={clsx(styles.container, { [styles.open]: isHeaderMenuOpen })}>
			<nav className={styles.content}>
				<div className={styles.serverSelect}>
					<ServerSelect servers={userServers} />
				</div>
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
