import { FC } from 'react'
import { FormState, UseFormRegister, UseFormWatch } from 'react-hook-form'

import SubHeading from '@/components/ui/heading/SubHeading'

import styles from './Profile.module.scss'
import ProfileField from './ProfileField'

interface IPasswordFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	watch: UseFormWatch<any>
}

const PasswordFields: FC<IPasswordFields> = ({ register, formState: { errors }, watch }) => {
	return (
		<>
			<div className={styles.innerBlock}>
				<div className={styles.innerBlockTitle}>
					<SubHeading text="Текущий пароль" className="text-lg" />
				</div>
				<div className={styles.innerBlockContent}>
					<ProfileField
						{...register('currentPassword', {
							required: 'Введите текущий пароль',
							minLength: { value: 8, message: 'Минимальная длина пароля 8 символов' },
						})}
						type="password"
						placeholder="Текущий пароль"
						error={errors.currentPassword}
					/>
				</div>
			</div>
			<div className={styles.innerBlock}>
				<div className={styles.innerBlockTitle}>
					<SubHeading text="Новый пароль" className="text-lg" />
				</div>
				<div className={styles.innerBlockContent}>
					<ProfileField
						{...register('newPassword', {
							required: 'Введите новый пароль',
							minLength: { value: 8, message: 'Минимальная длина пароля 8 символов' },
							validate: (val: string) => {
								if (watch('currentPassword') === val) {
									return 'Новый пароль равен текущему'
								}
							},
						})}
						type="password"
						placeholder="Новый пароль"
						error={errors.newPassword}
					/>
				</div>
			</div>
			<div className={styles.innerBlock}>
				<div className={styles.innerBlockTitle}>
					<SubHeading text="Повторите пароль" className="text-lg" />
				</div>
				<div className={styles.innerBlockContent}>
					<ProfileField
						{...register('confirmNewPassword', {
							required: 'Повторите пароль',
							minLength: { value: 8, message: 'Минимальная длина пароля 8 символов' },
							validate: (val: string) => {
								if (watch('newPassword') != val) {
									return 'Пароли не совпадают'
								}
							},
						})}
						type="password"
						placeholder="Повторите пароль"
						error={errors.confirmNewPassword}
					/>
				</div>
			</div>
		</>
	)
}

export default PasswordFields
