'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'

import styles from './styles.module.scss'

export function Menu() {
	const isOpen = true
	const pathname = usePathname()

	return <div className={clsx(styles.container, { [styles.open]: isOpen })}>Menu</div>
}
