import clsx from 'clsx'
import { forwardRef, useEffect, useState } from 'react'

import { Icon } from '../Icon'

import styles from './Form.module.scss'
import { IField } from './form.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', className, ...props }, ref) => {
		const [localType, setLocalType] = useState<'text' | 'password'>('text')

		const toggleShowPassword = () => {
			setLocalType((prev) => {
				if (prev === 'password') {
					return 'text'
				}
				return 'password'
			})
		}

		useEffect(() => {
			if (type === 'password') {
				setLocalType('password')
			}
		}, [])

		return (
			<div className={clsx(styles.field, className)}>
				<label>
					<span>{placeholder}</span>
					<div className={styles.inputWrapper}>
						<input
							type={type === 'text' || type === 'password' ? localType : type}
							ref={ref}
							{...props}
						/>
						{type === 'password' && (
							<button
								type="button"
								onClick={toggleShowPassword}
								className={styles.togglePasswordBtn}
							>
								{localType === 'password' ? (
									<Icon name="BiShow" size={24} />
								) : (
									<Icon name="BiHide" size={24} />
								)}
							</button>
						)}
					</div>
				</label>
				{error && <div className={styles.error}>{error.message?.toString()}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
