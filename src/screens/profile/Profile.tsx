import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import styles from './Profile.module.scss'

interface IProfile {}

const Profile: FC<IProfile> = () => {
	return (
		<Meta title="Мой профиль">
			<div className={styles.container}>Profile</div>
		</Meta>
	)
}

export default Profile
