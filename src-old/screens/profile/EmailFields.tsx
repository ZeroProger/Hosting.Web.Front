import { FC } from 'react'
import { FormState, UseFormRegister, UseFormWatch } from 'react-hook-form'

import SubHeading from '@/components/ui/heading/SubHeading'

import { validEmail } from '@/shared/regexp'

import styles from './Profile.module.scss'
import ProfileField from './ProfileField'

interface IEmailFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	watch: UseFormWatch<any>
}

const EmailFields: FC<IEmailFields> = ({ register, formState: { errors }, watch }) => {
	return (
		<>
			<div className={styles.innerBlock}>
				<div className={styles.innerBlockTitle}>
					<SubHeading text="Текущий email" className="text-lg" />
				</div>
				<div className={styles.innerBlockContent}>
					<ProfileField
						{...register('currentEmail')}
						disabled
						type="text"
						placeholder="Текущий email"
						error={errors.currentEmail}
					/>
				</div>
			</div>
			<div className={styles.innerBlock}>
				<div className={styles.innerBlockTitle}>
					<SubHeading text="Новый email" className="text-lg" />
				</div>
				<div className={styles.innerBlockContent}>
					<ProfileField
						{...register('newEmail', {
							pattern: { value: validEmail, message: 'Введите корректную почту' },
							validate: (val: string) => {
								if (watch('currentEmail') === val) {
									return 'Новая почта равна текущей'
								}
							},
						})}
						type="text"
						placeholder="Новый email"
						error={errors.newEmail}
					/>
				</div>
			</div>
		</>
	)
}

export default EmailFields
