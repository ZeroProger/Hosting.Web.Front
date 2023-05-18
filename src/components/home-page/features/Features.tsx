import { features } from 'fakeData/features.data'
import { motion } from 'framer-motion'
import { FC } from 'react'

import { Icon } from '@/components/ui/Icon'
import SubHeading from '@/components/ui/heading/SubHeading'

import { secondaryBlue } from '@/config/constants'

import styles from './Features.module.scss'

interface IFeatures {}

const Features: FC<IFeatures> = () => {
	return (
		<div className={styles.container}>
			<SubHeading text="Особенности" className="text-5xl sm:text-4xl text-secondary" />
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
							<Icon name={feature.icon} size={80} color={secondaryBlue} />
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

export default Features
