'use client'

import clsx from 'clsx'
import { useStore } from 'effector-react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import { cn } from '@/shared/lib/utils'
import { CommonUrls } from '@/shared/routes/urls'

import { $userServers, getUserServersFx } from '@/widgets/header'
import { ServerSelect } from '@/widgets/server/server-select'

import { useHeaderFixed } from '../hooks'

import { Burger } from './burger'
import { Logo } from './logo'
import { Menu } from './menu'
import { Nav } from './nav'
import { Profile } from './profile'
import styles from './styles.module.scss'

export function Header() {
	const pathname = usePathname()
	const isHomePage = pathname === CommonUrls.home()

	const { isFixed } = useHeaderFixed()
	const userServers = useStore($userServers)

	useEffect(() => {
		getUserServersFx()
	}, [])

	return (
		<header
			className={cn(styles.header, {
				[styles.isFixed]: isFixed,
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
