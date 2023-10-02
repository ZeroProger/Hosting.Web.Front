import clsx from 'clsx'
import { useStore } from 'effector-react'

import { $headerMenu, toggleHeaderMenu } from '@/widgets/header'

import '../styles/_hamburgers.scss'

import styles from './styles.module.scss'

export function Burger() {
	const { isHeaderMenuOpen } = useStore($headerMenu)

	return (
		<button className={styles.btn} onClick={() => toggleHeaderMenu()}>
			<div
				className={clsx('hamburger hamburger--squeeze mt-2', { ['is-active']: isHeaderMenuOpen })}
			>
				<div className={'hamburger-box'}>
					<div className={'hamburger-inner'}></div>
				</div>
			</div>
		</button>
	)
}
