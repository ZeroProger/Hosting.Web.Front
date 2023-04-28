import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import styles from './Auth.module.scss'

interface IAuth {}

const Auth: FC<IAuth> = () => {
	return (
		<Meta title="Авторизация или регистрация">
			<div className={styles.container}>Auth</div>
		</Meta>
	)
}

export default Auth
