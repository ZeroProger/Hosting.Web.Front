import Link from 'next/link'

import { AuthUrls, ProfileUrls } from '@/shared/routes/urls'
import { Icon } from '@/shared/ui/icon'

import styles from './styles.module.scss'

export function ProfileButton() {
	const isLogged = false

	const ProfileLink = (
		<Link href={ProfileUrls.profile()} className={styles.link}>
			<Icon name="user" /> Профиль
		</Link>
	)

	const AuthLink = (
		<Link href={AuthUrls.signIn()} className={styles.link}>
			<Icon name="log-in" size={26} /> Войти
		</Link>
	)

	return isLogged ? ProfileLink : AuthLink
}
