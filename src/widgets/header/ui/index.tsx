'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import { useServer } from '@/entities/server/store'

import { cn } from '@/shared/lib/utils'
import { CommonUrls } from '@/shared/routes/urls'

import { ServerSelect } from '@/widgets/server/server-select'

import { useHeaderFixed } from '../lib'

import { Burger } from './burger'
import { Logo } from './logo'
import { Menu } from './menu'
import { Nav } from './nav'
import { Profile } from './profile'
import styles from './styles.module.scss'
import clsx from 'clsx'

export function Header() {
	const pathname = usePathname()
	const isHomePage = pathname === CommonUrls.home()

	const { isFixed } = useHeaderFixed()
	const { userServers, getUserServers } = useServer()

	useEffect(() => {
		getUserServers()
	}, [])

	return (
		<header
			className={cn(styles.header, {
				[styles.fixed]: isFixed,
				[styles.landscape]: isHomePage,
			})}
		>
			<div className={styles.content}>
				<div className={clsx(styles.row, styles.mainRow)}>
					<div className={styles.logo}>
						<Logo />
					</div>
					<div className={styles.serverSelect}>
						<ServerSelect servers={userServers || []} />
					</div>
					<div className={styles.nav}>
						<Nav />
					</div>
				</div>
				<div className={styles.row}>
					<Profile />
					<Burger />
				</div>
			</div>
			<Menu />
		</header>
	)
}
