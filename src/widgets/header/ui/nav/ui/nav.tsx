'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/shared/lib/utils'

import { items } from '../config/config'
import styles from './styles.module.scss'

export function Nav() {
	const pathname = usePathname()

	return (
		<nav className={styles.container}>
			<ul className={styles.list}>
				{items.map((item) => (
					<li key={item.url} className={styles.item}>
						<Link
							href={item.url}
							className={cn(styles.link, { [styles.active]: pathname === item.url })}
						>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
