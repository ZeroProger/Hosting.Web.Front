'use client'

import { cn } from '@/shared/lib/utils'

import { useHeaderFixed } from '../lib'

import { Burger } from './burger'
import { Logo } from './logo'
import { Menu } from './menu'
import { Nav } from './nav'
import { Profile } from './profile'
import { ServerSelect } from './server-select'
import styles from './styles.module.scss'

export function Header() {
	const { isFixed } = useHeaderFixed()

	return (
		<header
			className={cn(styles.header, {
				[styles.fixed]: isFixed,
			})}
		>
			<div className={styles.content}>
				<div className={styles.row}>
					<Logo />
					<ServerSelect />
					<Nav />
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
