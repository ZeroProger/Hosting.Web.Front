import clsx from 'clsx'
import { qualities } from 'fakeData/features.data'
import { motion } from 'framer-motion'
import { FC } from 'react'

import { Icon } from '@/components/ui/Icon'
import SubHeading from '@/components/ui/heading/SubHeading'

import { secondaryBlue } from '@/config/constants'

import styles from './Qualities.module.scss'

interface IQualities {}

const Qualities: FC<IQualities> = () => {
	return (
		<div className={styles.container}>
			<SubHeading
				text="Почему игроки выбирают"
				className={clsx('text-3xl sm:text-2xl uppercase text-center mb-2', styles.whyHeading)}
			/>
			<SubHeading
				text="Наш хостинг игровых серверов"
				className="text-5xl sm:text-3xl uppercase text-center mb-12"
			/>
			<div className={styles.qualities}>
				{qualities.map((quality, index) => (
					<motion.div
						key={quality.id}
						className={styles.quality}
						initial={{ scale: 0, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						viewport={{ once: true, amount: 'all' }}
						transition={{ delay: 0.2 * index, duration: 0.4, ease: 'backInOut' }}
					>
						<div className={styles.icon}>
							<Icon name={quality.icon} size={80} color={secondaryBlue} />
						</div>
						<div className={styles.title}>{quality.title}</div>
						<div className={styles.line}></div>
						<div className={styles.description}>{quality.description}</div>
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default Qualities
