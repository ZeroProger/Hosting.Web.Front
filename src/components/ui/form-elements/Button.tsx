import clsx from 'clsx'
import { FC } from 'react'

import styles from './Form.module.scss'
import { IButton } from './form.interface'

const Button: FC<IButton> = ({ children, className, ...props }) => {
	return (
		<button className={clsx(styles.button, className)} {...props}>
			{children}
		</button>
	)
}

export default Button
