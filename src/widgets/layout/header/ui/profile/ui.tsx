import Link from 'next/link'
import { FaUser } from 'react-icons/fa'
import { PiSignInFill } from 'react-icons/pi'

import { AuthUrls, ProfileUrls } from '@/shared/routes/urls'

import styles from './styles.module.scss'

export function Profile() {
	const isLogged = false

	const ProfileLink = (
		<Link href={ProfileUrls.profile()} className={styles.link}>
			<FaUser /> Профиль
		</Link>
	)

	const AuthLink = (
		<Link href={AuthUrls.signIn()} className={styles.link}>
			<PiSignInFill size={26} /> Войти
		</Link>
	)

	return isLogged ? ProfileLink : AuthLink
}
