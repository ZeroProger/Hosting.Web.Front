import { LogIn, User } from 'lucide-react'
import Link from 'next/link'

import { AuthUrls, ProfileUrls } from '@/shared/routes/urls'

import styles from './styles.module.scss'

export function ProfileButton() {
	const isLogged = false

	const ProfileLink = (
		<Link href={ProfileUrls.profile()} className={styles.link}>
			<User size={26} /> Профиль
		</Link>
	)

	const AuthLink = (
		<Link href={AuthUrls.signIn()} className={styles.link}>
			<LogIn size={26} /> Войти
		</Link>
	)

	return isLogged ? ProfileLink : AuthLink
}
