'use client'

import clsx from 'clsx'
import { useStore } from 'effector-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import { $serverSelect } from '@/entities/server/model'

import { cn } from '@/shared/lib/utils'
import { useFetchUserServers } from '@/shared/queries/server'

import { $headerMenu, closeHeaderMenu } from '@/widgets/header'
import { ServerSelect } from '@/widgets/server-select'

import { menuItems } from '../config'

import styles from './styles.module.scss'

export function Menu() {
	const { isHeaderMenuOpen } = useStore($headerMenu)
	const { isServerSelectOpen } = useStore($serverSelect)

	const pathname = usePathname()

	const { data: userServers } = useFetchUserServers()

	useEffect(() => {
		if (isHeaderMenuOpen) {
			closeHeaderMenu()
		}
	}, [pathname])

	return (
		<div className={clsx(styles.container, { [styles.open]: isHeaderMenuOpen })}>
			<nav className={styles.content}>
				<div className={styles.serverSelect}>
					<ServerSelect servers={userServers || []} />
				</div>
				<ul className={styles.list}>
					{menuItems.map((menuItem) => (
						<Link
							key={menuItem.label}
							href={menuItem.url}
							className={cn(styles.item, { 'pointer-events-none': isServerSelectOpen })}
						>
							{menuItem.label}
						</Link>
					))}
				</ul>
			</nav>
		</div>
	)
}
