import Link from 'next/link'
import { FaUser } from 'react-icons/fa'

import styles from './styles.module.scss'

export function Profile() {
	const isLogged = true

	const ProfileLink = (
		<Link href={''} className={styles.link}>
			<FaUser /> Профиль
		</Link>
	)

	const AuthLink = (
		<Link href={''} className={styles.link}>
			<FaUser /> Войти
		</Link>
	)

	return isLogged ? ProfileLink : AuthLink
}
