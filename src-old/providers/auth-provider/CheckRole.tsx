import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

import { useAuth } from '@/hooks/auth/useAuth'

import { getAuthUrl } from '@/config/url.config'

import { TypeComponentAuthFields } from './auth-provider.types'

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	Component: { isOnlyUser },
	children,
}) => {
	const { user } = useAuth()

	const router = useRouter()

	if (user && isOnlyUser) return <>{children}</>

	if (!router.pathname.includes('auth')) router.replace(getAuthUrl())

	return null
}

export default CheckRole
