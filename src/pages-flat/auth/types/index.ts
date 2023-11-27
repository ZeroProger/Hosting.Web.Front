import * as zod from 'zod'

export const signInFormSchema = zod.object({
	login: zod.string({ required_error: 'Введите имя пользователя' }).min(3, {
		message: 'Username must be at least 3 characters.',
	}),
	password: zod.string({ required_error: 'Введите пароль' }).min(4, {
		message: 'Username must be at least 4 characters.',
	}),
})

export const signUpFormSchema = zod.object({
	email: zod.string({ required_error: 'Введите почту' }).email('Проверьте правильность ввода'),
	login: zod.string({ required_error: 'Введите имя пользователя' }).min(3, {
		message: 'Username must be at least 3 characters.',
	}),
	password: zod.string({ required_error: 'Введите пароль' }).min(4, {
		message: 'Username must be at least 4 characters.',
	}),
})

export type SignInFields = zod.infer<typeof signInFormSchema>

export type SignUpFields = zod.infer<typeof signUpFormSchema>
