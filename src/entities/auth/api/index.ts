import { axiosClassic } from '@/shared/api/common'
import { AuthApiUrls } from '@/shared/api/urls'
import { IAuthResponse, ILogoutRequest, ISignInRequest, ISignUpRequest } from '../types'

export function signIn(request: ISignInRequest) {
	return axiosClassic.post<IAuthResponse>(AuthApiUrls.signIn(), request)
}

export function signUp(request: ISignUpRequest) {
	return axiosClassic.post<IAuthResponse>(AuthApiUrls.signUp(), request)
}

export function logout(request: ILogoutRequest) {
	return axiosClassic.post(AuthApiUrls.logout(), request)
}
