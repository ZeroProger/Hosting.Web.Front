import clsx from 'clsx'
import { LogIn, User } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { useAuth } from '@/entities/auth'

import { AuthUrls, ProfileUrls } from '@/shared/routes/urls'
import { Button } from '@/shared/ui/button'

import styles from './styles.module.scss'

export function ProfileButton() {
	const [isMount, setIsMount] = useState(false)

	const { user, authToken } = useAuth()

	useEffect(() => {
		setIsMount(true)
	}, [])

	if (!isMount) return null

	if (user || authToken) {
		return (
			<div className="flex items-center gap-2">
				<Link href={ProfileUrls.profile()} className={styles.link}>
					<User size={28} strokeWidth={2.5} />{' '}
					<span className="hidden xs:inline">{user?.userName}</span>
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
