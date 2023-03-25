import { FC } from 'react'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import styles from './ServerModDescription.module.scss'

const ServerModDescription: FC = () => {
	const description = useTypedSelector((state) => state.modsReducer.modDescription)

	return (
		<div className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></div>
	)
}

export default ServerModDescription
