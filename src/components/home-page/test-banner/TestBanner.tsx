import { FC } from 'react'

import styles from './TestBanner.module.scss'

interface ITestBanner {}

const TestBanner: FC<ITestBanner> = () => {
	return <div className={styles.container}>TestBanner</div>
}

export default TestBanner
