'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'

import { qualities } from '@/shared/$fake-data$/features.data'
import { SubHeading } from '@/shared/ui/heading'
import { Icon } from '@/shared/ui/icon'

import styles from './styles.module.scss'

export function Qualities() {
	return (
		<div className={styles.container}>
			<SubHeading
				className={clsx('text-2xl sm:text-3xl uppercase text-center mb-2', styles.whyHeading)}
			>
				Почему игроки выбирают
			</SubHeading>
			<SubHeading className="text-3xl sm:text-5xl uppercase text-center mb-12">
				Наш хостинг игровых серверов
			</SubHeading>
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
							<Icon name={quality.icon} size={80} />
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
