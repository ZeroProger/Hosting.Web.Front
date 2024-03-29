'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'

import { useAuth } from '@/entities/auth'

import { cn } from '@/shared/lib/utils'
import { useFetchUserServers } from '@/shared/queries/server'
import { CommonUrls } from '@/shared/routes/urls'

import { ServerSelect } from '@/widgets/server-select'

import { useHeaderFixed } from '../hooks'

import { Burger } from './burger'
import { Logo } from './logo'
import { Menu } from './menu'
import { Nav } from './nav'
import { ProfileButton } from './profile-button'
import styles from './styles.module.scss'

export function Header() {
	const pathname = usePathname()
	const isHomePage = pathname === CommonUrls.home()

	const { isFixed } = useHeaderFixed()
	const { user } = useAuth()

	const { data: userServers } = useFetchUserServers()

	return (
		<header
			className={cn(styles.header, {
				[styles.isFixed]: false,
				[styles.landscape]: isHomePage,
			})}
		>
			<div className={styles.content}>
				<div className={clsx(styles.row, styles.mainRow)}>
					<div className={styles.logo}>
						<Logo />
					</div>
					{user && (
						<>
							{userServers && userServers.length > 0 && (
								<div className={styles.serverSelect}>
									<ServerSelect servers={userServers} />
								</div>
							)}
							<div className={styles.nav}>
								<Nav />
							</div>
						</>
					)}
				</div>
				<div className={styles.row}>
					<ProfileButton />
					<Burger />
				</div>
			</div>
			<Menu />
		</header>
	)
}
