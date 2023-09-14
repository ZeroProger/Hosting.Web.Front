import { IUser } from '@/shared/types/user.types'

export interface IInitialState {
	user: IUser | null
	authToken: string | null
	isLoading: boolean
}

export interface ILoginData {
	login: string
	password: string
}

export interface IRegisterData {
	email: string
	login: string
	password: string
	confirmPassword: string
}

export interface IAuthResponse {
	user: IUser
	authToken: string
}
