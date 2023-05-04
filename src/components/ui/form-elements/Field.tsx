import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './Form.module.scss'
import { IField } from './form.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', className, ...props }, ref) => {
		return (
			<div className={clsx(styles.field, className)}>
				<label>
					<span>{placeholder}</span>
					<input type={type} ref={ref} {...props} />
				</label>
				{error && <div className={styles.error}>{error.message?.toString()}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
