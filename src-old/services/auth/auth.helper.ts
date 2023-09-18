import Cookies from 'js-cookie'

import { IAuthResponse } from '@/store/user/user.interface'

export const saveToCookies = (data: IAuthResponse) => {
	Cookies.set('authToken', data.authToken)
}

export const removeFromStorage = () => {
	Cookies.remove('authToken')
	localStorage.removeItem('user')
	localStorage.removeItem('authToken')
}

export const saveToStorage = (data: IAuthResponse) => {
	saveToCookies(data)
	localStorage.setItem('user', JSON.stringify(data.user))
	localStorage.setItem('authToken', data.authToken)
}
