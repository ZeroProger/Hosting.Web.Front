'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'

import { useAuth } from '@/entities/auth'

import { CommonUrls } from '@/shared/routes/urls'
import { Button } from '@/shared/ui/button'

import styles from './styles.module.scss'

export function Profile() {
	const router = useRouter()

	const { authToken, logout } = useAuth()

	const handleLogout = () => {
		if (authToken) {
			logout({ authToken: authToken })
			router.push(CommonUrls.home())
		}

		return
	}

	return (
		<div className={styles.container}>
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
