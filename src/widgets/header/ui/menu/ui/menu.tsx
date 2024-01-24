'use client'

import clsx from 'clsx'
import { useStore } from 'effector-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useFetchUserServers } from '@/shared/queries/server'

import { $headerMenu, closeHeaderMenu } from '@/widgets/header'
import { ServerSelect } from '@/widgets/server-select'

import { menuItems } from '../config'

import styles from './styles.module.scss'

export function Menu() {
	const router = useRouter()
	const pathname = usePathname()

	const { isHeaderMenuOpen } = useStore($headerMenu)

	const { data: userServers } = useFetchUserServers()

	useEffect(() => {
		if (isHeaderMenuOpen) {
			closeHeaderMenu()
		}
	}, [pathname])

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
				<div className={styles.serverSelect}>
					<ServerSelect servers={userServers || []} />
				</div>
			</nav>
		</div>
	)
}
