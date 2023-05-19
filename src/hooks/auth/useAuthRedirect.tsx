import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { getServersUrl } from '@/config/url.config'

import { useAuth } from './useAuth'

export const useAuthRedirect = () => {
	const { user } = useAuth()
	const { query, push } = useRouter()
	const redirect = query.redirect ? String(query.redirect) : getServersUrl()

	useEffect(() => {
		console.log(redirect)
		if (user) push(redirect)
	}, [user, redirect, push])
}
