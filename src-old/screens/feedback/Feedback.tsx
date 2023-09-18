import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import styles from './Feedback.module.scss'

interface IFeedback {}

const Feedback: FC<IFeedback> = () => {
	return (
		<Meta title="Обратная связь">
			<div className={styles.container}>Feedback</div>
		</Meta>
	)
}

export default Feedback
