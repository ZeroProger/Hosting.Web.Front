import {
	ILoginRequest,
	ILogoutRequest,
	IRegisterRequest,
} from '@/shared/types/requests/auth-requests.types'

import { getLoginUrl, getLogoutUrl, getRegistrationUrl } from '@/config/api/account-api.config'

import { axiosClassic } from '@/api/interceptors'

export const AuthService = {
	async login(data: ILoginRequest) {
		return axiosClassic.post(getLoginUrl(), data)
	},

	async register(data: IRegisterRequest) {
		return axiosClassic.post(getRegistrationUrl(), data)
	},

	async logout(data: ILogoutRequest) {
		return axiosClassic.post(getLogoutUrl(), data)
	},
}
