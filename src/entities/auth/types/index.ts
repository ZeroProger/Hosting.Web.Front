export interface IUser {
	id: number
	email: string
	userName: string
	isAdmin: boolean
	avatarUrl: string
}

export type AuthContextType = {
	user: IUser | null
	signIn: (request: ISignInRequest) => Promise<boolean>
	signUp: (request: ISignUpRequest) => Promise<boolean>
	logout: (request: ILogoutRequest) => void
}

export interface IAuthResponse {
	user: IUser
	authToken: string
}

export interface ISignInRequest {
	login: string
	password: string
}

export interface ISignUpRequest {
	login: string
	email: string
	password: string
}

export interface ILogoutRequest {
	authToken: string
}
