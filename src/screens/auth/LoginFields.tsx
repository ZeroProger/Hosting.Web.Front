import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import Field from '@/components/ui/form-elements/Field'

import { validEmail } from '@/shared/regexp'

interface ILoginFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const LoginFields: FC<ILoginFields> = ({ register, formState: { errors }, isPasswordRequired }) => {
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
				{...register('password', {
					required: 'Введите пароль',
					minLength: { value: 8, message: 'Минимальная длина пароля 8 символов' },
				})}
				type="password"
				placeholder="Пароль"
				error={errors.password}
			/>
		</>
	)
}

export default LoginFields
