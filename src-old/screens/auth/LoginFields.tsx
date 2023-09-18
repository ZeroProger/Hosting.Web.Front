import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import Field from '@/components/ui/form-elements/Field'

interface ILoginFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const LoginFields: FC<ILoginFields> = ({ register, formState: { errors }, isPasswordRequired }) => {
	return (
		<>
			<Field
				{...register('login', {
					required: 'Введите имя пользователя',
				})}
				type="text"
				placeholder="Имя пользователя"
				error={errors.login}
			/>
			<Field
				{...register('password', {
					required: 'Введите пароль',
					minLength: { value: 6, message: 'Минимальная длина пароля 6 символов' },
				})}
				type="password"
				placeholder="Пароль"
				error={errors.password}
			/>
		</>
	)
}

export default LoginFields
