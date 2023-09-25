'use client'

import clsx from 'clsx'
import { useStore } from 'effector-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useFetchUserServers } from '@/shared/queries/server'

import { $headerMenu } from '@/widgets/header'
import { ServerSelect } from '@/widgets/server/server-select'

import { menuItems } from '../config'

import styles from './styles.module.scss'

export function Menu() {
	const { isHeaderMenuOpen } = useStore($headerMenu)

	const pathname = usePathname()

	const { data: userServers } = useFetchUserServers()

	return (
		<div className={clsx(styles.container, { [styles.open]: isHeaderMenuOpen })}>
			<nav className={styles.content}>
				<div className={styles.serverSelect}>
					<ServerSelect servers={userServers || []} />
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
