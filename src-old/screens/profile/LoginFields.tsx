import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import SubHeading from '@/components/ui/heading/SubHeading'

import styles from './Profile.module.scss'
import ProfileField from './ProfileField'

interface ILoginFields {
	register: UseFormRegister<any>
	formState: FormState<any>
}

const LoginFields: FC<ILoginFields> = ({ register, formState: { errors } }) => {
	return (
		<>
			<div className={styles.innerBlock}>
				<div className={styles.innerBlockTitle}>
					<SubHeading text="Имя пользователя" className="text-lg" />
				</div>
				<div className={styles.innerBlockContent}>
					<ProfileField
						{...register('login', {
							required: 'Введите имя пользователя',
							minLength: { value: 3, message: 'Минимальная длина имени 3 символа' },
						})}
						type="text"
						placeholder="Имя пользователя"
						error={errors.login}
					/>
				</div>
			</div>
		</>
	)
}

export default LoginFields
