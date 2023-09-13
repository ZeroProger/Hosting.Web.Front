import Link from 'next/link'
import { FaUser } from 'react-icons/fa'

export function Profile() {
	const isLogged = true

	const ProfileLink = (
		<Link href={''}>
			<FaUser /> Профиль
		</Link>
	)

	const AuthLink = (
		<Link href={''}>
			<FaUser /> Войти
		</Link>
	)

	return isLogged ? ProfileLink : AuthLink
}
