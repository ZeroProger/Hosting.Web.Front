import clsx from 'clsx'

import '@/app/styles/hamburgers/_hamburgers.scss'

import { useHeaderMenu } from '../../store'

import styles from './styles.module.scss'

export function Burger() {
	const { isHeaderMenuOpen, toggleHeaderMenu } = useHeaderMenu()

	return (
		<button className={styles.btn} onClick={toggleHeaderMenu}>
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
