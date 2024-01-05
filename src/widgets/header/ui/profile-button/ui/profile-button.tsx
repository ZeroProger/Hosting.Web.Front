import { LogIn, User } from 'lucide-react'
import Link from 'next/link'

import { AuthUrls, CommonUrls, ProfileUrls } from '@/shared/routes/urls'
import { Button } from '@/shared/ui/button'

import { useAuth } from '@/entities/auth'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import styles from './styles.module.scss'

export function ProfileButton() {
	const router = useRouter()

	const { user, authToken, logout } = useAuth()

	const handleLogout = () => {
		if (authToken) {
			logout({ authToken: authToken })
			router.push(CommonUrls.home())
		}
	}

	if (user) {
		return (
			<div className="flex items-center gap-2">
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
