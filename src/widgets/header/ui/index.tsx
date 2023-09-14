import { cn } from '@/shared/lib/utils'

import { Burger } from './burger'
import { Logo } from './logo'
import { Menu } from './menu'
import { Nav } from './nav'
import { Profile } from './profile'
import { ServerSelect } from './server-select'
import styles from './styles.module.scss'

export function Header() {
	const isFixed = false

	return (
		<header
			className={cn(styles.headerWrapper, {
				[styles.fixed]: isFixed,
			})}
		>
			<div className={styles.header}>
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
