import { useRouter } from 'next/router'
import { FC } from 'react'

import { IParams } from '@/shared/types/base.types'

import styles from './Versions.module.scss'

interface IVersions {}

const Versions: FC<IVersions> = () => {
	const router = useRouter()
	const { software } = router.query as IParams

	return <div className={styles.container}>{software}</div>
}

export default Versions
