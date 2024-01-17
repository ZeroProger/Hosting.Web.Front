import clsx from 'clsx'
import { LogIn, User } from 'lucide-react'
import Link from 'next/link'

import { useAuth } from '@/entities/auth'

import { AuthUrls, ProfileUrls } from '@/shared/routes/urls'
import { Button } from '@/shared/ui/button'

import styles from './styles.module.scss'

export function ProfileButton() {
	const { user } = useAuth()

	if (user) {
		return (
			<div className="flex items-center gap-2">
				<Link href={ProfileUrls.profile()} className={styles.link}>
					<User size={26} /> {user?.userName}
				</Link>
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
