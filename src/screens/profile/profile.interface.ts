export interface IPersonalInfoChange {
	newAvatar: string
	userName: string
}

export interface IEmailChange {
	currentEmail: string
	newEmail: string
}

export interface IPasswordChange {
	currentPassword: string
	newPassword: string
	confirmNewPassword: string
}
