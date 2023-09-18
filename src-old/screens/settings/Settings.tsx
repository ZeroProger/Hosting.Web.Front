import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import styles from './Settings.module.scss'

interface ISettings {}

const Settings: FC<ISettings> = () => {
	return (
		<Meta title="Настройки аккаунта">
			<div className={styles.container}>Settings</div>
		</Meta>
	)
}

export default Settings
