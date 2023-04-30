import { FC } from 'react'
import { FormState, UseFormRegister, UseFormWatch } from 'react-hook-form'

import Field from '@/components/ui/form-elements/Field'

import { validEmail } from '@/shared/regexp'

interface IRegisterFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	watch: UseFormWatch<any>
}

const RegisterFields: FC<IRegisterFields> = ({ register, formState: { errors }, watch }) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Введите почту',
					pattern: { value: validEmail, message: 'Введите корректную почту' },
				})}
				type="email"
				placeholder="Почта"
				error={errors.email}
			/>
			<Field
				{...register('login', {
					required: 'Введите логин',
				})}
				placeholder="Логин"
				error={errors.login}
			/>
			<Field
				{...register('password', {
					required: 'Введите пароль',
					minLength: { value: 8, message: 'Минимальная длина пароля 8 символов' },
				})}
				type="password"
				placeholder="Пароль"
				error={errors.password}
			/>
			<Field
				{...register('repeatPassword', {
					required: 'Повторите пароль',
					minLength: { value: 8, message: 'Минимальная длина пароля 8 символов' },
					validate: (val: string) => {
						if (watch('password') != val) {
							return 'Пароли не совпадают'
						}
					},
				})}
				type="password"
				placeholder="Повторите пароль"
				error={errors.repeatPassword}
			/>
		</>
	)
}

export default RegisterFields
