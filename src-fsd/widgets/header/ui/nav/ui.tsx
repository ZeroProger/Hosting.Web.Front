'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/shared/lib/utils'

import { items } from './config'
import styles from './styles.module.scss'

export function Nav() {
	const pathname = usePathname()

	return (
		<nav className="">
			<ul className="">
				{items.map((item) => (
					<li key={item.url} className="">
						<Link href={item.url} className={cn('', { [styles.active]: pathname === item.url })}>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
