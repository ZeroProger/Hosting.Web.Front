import clsx from 'clsx'
import { forwardRef } from 'react'

import { IField } from '@/components/ui/form-elements/form.interface'

import styles from './Profile.module.scss'

const ProfileField = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', className, ...props }, ref) => {
		return (
			<div className={clsx(styles.field, className)}>
				<label>
					<input type={type} ref={ref} {...props} />
				</label>
				{error && <div className={styles.error}>{error.message?.toString()}</div>}
			</div>
		)
	}
)

ProfileField.displayName = 'Field'

export default ProfileField
