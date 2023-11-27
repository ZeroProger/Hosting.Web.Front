import { LogIn, User } from 'lucide-react'
import Link from 'next/link'

import { AuthUrls, ProfileUrls } from '@/shared/routes/urls'
import { Button } from '@/shared/ui/button'

import { AUTH_TOKEN_COOKIE_KEY, useAuth } from '@/entities/auth'
import clsx from 'clsx'
import Cookies from 'js-cookie'
import styles from './styles.module.scss'

export function ProfileButton() {
	const { user, logout } = useAuth()
	const authToken = Cookies.get(AUTH_TOKEN_COOKIE_KEY) || ''

	const handleLogout = () => {
		logout({ authToken: authToken })
	}

	if (user) {
		return (
			<div>
				<Link href={ProfileUrls.profile()} className={styles.link}>
					<User size={26} /> {user?.userName}
				</Link>
				<Button
					variant={'ghost'}
					className={clsx(styles.link, styles.primary)}
					onClick={handleLogout}
				>
					Выйти
				</Button>
			</div>
		)
	}

	return (
		<Button asChild variant={'ghost'} className={clsx(styles.link, styles.primary)}>
			<Link href={AuthUrls.signIn()}>
				<LogIn size={26} /> Войти
			</Link>
		</Button>
	)
}
