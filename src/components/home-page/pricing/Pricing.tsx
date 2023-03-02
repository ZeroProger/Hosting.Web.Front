import { tariffs } from 'fakeData/tariffs.data'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC, useRef } from 'react'

import SubHeading from '@/components/ui/heading/SubHeading'

import { getServerCreateUrl, getTariffUrl } from '@/config/url.config'

import styles from './Pricing.module.scss'

interface IPricing {}

const Pricing: FC<IPricing> = () => {
	const scrollRef = useRef(null)

	return (
		<div className={styles.container} id="pricing">
			<SubHeading text="Тарифы" className="text-5xl text-secondary" />
			<div className={styles.tariffs}>
				{tariffs.map((tariff, index) => (
					<motion.div
						key={tariff.id}
						className={styles.tariff}
						initial={{ scale: 0, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						viewport={{ once: true, amount: 'all' }}
						transition={{ delay: 0.2 * index, duration: 0.4, ease: 'backInOut' }}
					>
						<div className={styles.title}>{tariff.title}</div>
						<div className={styles.options}>
							{tariff.options.map((option) => (
								<div key={option.label} className={styles.option}>
									<div className={styles.label}>{option.label}:</div>
									<div className={styles.value}>{option.value}</div>
								</div>
							))}
						</div>
						<div className={styles.actions}>
							<Link href={getTariffUrl(tariff.slug)} className={styles.btn}>
								Подробнее
							</Link>
							<Link href={getServerCreateUrl(`tariff=${tariff.slug}`)} className={styles.btnOrder}>
								Заказать
							</Link>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default Pricing
