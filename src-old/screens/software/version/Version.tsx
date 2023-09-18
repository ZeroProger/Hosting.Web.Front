import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import { IParams } from '@/shared/types/base.types'

import styles from './Version.module.scss'

interface IVersion {}

const Version: FC<IVersion> = () => {
	const router = useRouter()
	const { software, version } = router.query as IParams

	useEffect(() => {
		console.log(software, version)
	}, [])

	return <div className={styles.container}>{software + ' : ' + version}</div>
}

export default Version
