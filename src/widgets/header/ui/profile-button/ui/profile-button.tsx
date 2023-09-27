import { LogIn, User } from 'lucide-react'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'

import { ProfileUrls } from '@/shared/routes/urls'
import { Button } from '@/shared/ui/button'

import styles from './styles.module.scss'

export function ProfileButton() {
	const { data: session } = useSession()

	if (session) {
		return (
			<Link href={ProfileUrls.profile()} className={styles.link}>
				<User size={26} /> {session.user?.name}
			</Link>
		)
	}

	return (
		<Button onClick={() => signIn()} variant={'ghost'} className={styles.link}>
			<LogIn size={26} /> Войти
		</Button>
	)
}
