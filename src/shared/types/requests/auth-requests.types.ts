export interface ILoginRequest {
	login: string
	password: string
}

export interface IRegisterRequest {
	login: string
	email: string
	password: string
}

export interface ILogoutRequest {
	authToken: string
}
