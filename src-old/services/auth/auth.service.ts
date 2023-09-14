import {
	ILoginRequest,
	ILogoutRequest,
	IRegisterRequest,
} from '@/shared/types/requests/auth-requests.types'

import { getLoginUrl, getLogoutUrl, getRegistrationUrl } from '@/config/api/account-api.config'

import { IAuthResponse } from '@/store/user/user.interface'

import { removeFromStorage, saveToStorage } from './auth.helper'
import { axiosClassic } from '@/api/interceptors'

export const AuthService = {
	async login(data: ILoginRequest) {
		const response = await axiosClassic.post<IAuthResponse>(getLoginUrl(), data)

		if (response.data.authToken) {
			saveToStorage(response.data)
		}

		return response
	},

	async register(data: IRegisterRequest) {
		const response = await axiosClassic.post<IAuthResponse>(getRegistrationUrl(), data)

		if (response.data.authToken) {
			saveToStorage(response.data)
		}

		return response
	},

	async logout(data: ILogoutRequest) {
		const response = await axiosClassic.post(getLogoutUrl(), data)

		if (response.status === 200) {
			removeFromStorage()
		}

		return response
	},
}
