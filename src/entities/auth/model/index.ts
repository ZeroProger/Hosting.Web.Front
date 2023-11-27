import { useLocalStorage } from '@/shared/hooks'
import { toastError } from '@/shared/lib/react-toastify'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'
import { logout, signIn, signUp } from '../api'
import { AUTH_TOKEN_COOKIE_KEY } from '../config'
import { AuthContextType, ILogoutRequest, ISignInRequest, ISignUpRequest, IUser } from '../types'

export const authContext = createContext<AuthContextType>({
	user: null,
	authToken: null,
	signIn: async () => false,
	signUp: async () => false,
	logout: async () => {},
})

export const useAuth = () => {
	return useContext(authContext)
}

export function useAuthProvider(): AuthContextType {
	const [user, setUser] = useState<IUser | null>(null)
	const [authToken, setAuthToken] = useState<string | null>(null)

	const [userFromLS, setUserLS] = useLocalStorage<IUser | null>('user', null)
	const [authTokenFromLS, setAuthTokenLS] = useLocalStorage<string>(AUTH_TOKEN_COOKIE_KEY, '')

	const router = useRouter()

	const handleSignIn = async (request: ISignInRequest) => {
		const { data } = await signIn(request)

		if (!data.authToken) {
			return false
		}

		setUser(data.user)
		setUserLS(data.user)
		setAuthTokenLS(data.authToken)

		Cookies.set(AUTH_TOKEN_COOKIE_KEY, data.authToken)

		return true
	}

	const handleSignUp = async (request: ISignUpRequest) => {
		const { data } = await signUp(request)

		if (!data.authToken) {
			return false
		}

		setUser(data.user)
		setUserLS(data.user)
		setAuthTokenLS(data.authToken)

		Cookies.set(AUTH_TOKEN_COOKIE_KEY, data.authToken)

		return true
	}

	const handleLogout = async (request: ILogoutRequest) => {
		const { status } = await logout(request)

		if (status !== 200) {
			toastError('Ошибка выхода из системы')
			return
		}

		setUser(null)
		localStorage.removeItem('user')
		localStorage.removeItem(AUTH_TOKEN_COOKIE_KEY)

		Cookies.remove(AUTH_TOKEN_COOKIE_KEY)
	}

	useEffect(() => {
		if (userFromLS) {
			setUser(userFromLS)
		}
		if (authTokenFromLS) {
			setAuthToken(authTokenFromLS)
			Cookies.set(AUTH_TOKEN_COOKIE_KEY, authTokenFromLS)
		}
	}, [userFromLS, authTokenFromLS])

	return {
		user,
		authToken,
		signIn: handleSignIn,
		signUp: handleSignUp,
		logout: handleLogout,
	}
}
