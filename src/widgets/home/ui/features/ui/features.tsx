'use client'

import { motion } from 'framer-motion'

import { features } from '../config'
import { SubHeading } from '@/shared/ui/heading'

import styles from './styles.module.scss'

export function Features() {
	return (
		<div className={styles.container}>
			<SubHeading className="text-4xl sm:text-5xl text-foreground mb-8">Наши фишки</SubHeading>
			<div className={styles.features}>
				{features.map((feature, index) => (
					<motion.div
						key={feature.id}
						className={styles.feature}
						initial={{ scale: 0, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						viewport={{ once: true, amount: 'all' }}
						transition={{
							delay: Math.random() * 0.4 * (index % 3),
							duration: 0.4,
							ease: 'backInOut',
						}}
					>
						<div className={styles.icon}>
							{feature.icon}
						</div>
						<div className={styles.text}>
							<div className={styles.title}>{feature.title}</div>
							<p className={styles.description}>{feature.description}</p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	)
}
