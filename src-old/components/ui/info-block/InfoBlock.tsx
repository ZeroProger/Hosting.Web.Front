import { FC, PropsWithChildren } from 'react'

import { primary } from '@/config/constants'

import { Icon } from '../Icon'

import styles from './InfoBlock.module.scss'

interface IInfoBlock {
	withIcon?: boolean
}

const InfoBlock: FC<PropsWithChildren<IInfoBlock>> = ({ withIcon, children }) => {
	return (
		<div className={styles.container}>
			{withIcon && (
				<div className={styles.icon}>
					<Icon name="AiOutlineInfoCircle" color={primary} size={40} />
				</div>
			)}
			<div className={styles.text}>{children}</div>
		</div>
	)
}

export default InfoBlock
