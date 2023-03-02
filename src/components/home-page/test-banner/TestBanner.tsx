import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC } from 'react'

import { getServerCreateUrl } from '@/config/url.config'

import styles from './TestBanner.module.scss'

interface ITestBanner {}

const TestBanner: FC<ITestBanner> = () => {
	return (
		<motion.div
			className={styles.container}
			initial={{ scale: 0, opacity: 0 }}
			whileInView={{ scale: 1, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay: 0, duration: 0.6, ease: 'backInOut' }}
		>
			<div className={styles.title}>3 дня полностью бесплатно!</div>
			<div className={styles.description}>Тестирование игрового сервера</div>
			<Link href={getServerCreateUrl('test=true')} className={styles.btn}>
				Начать тестировать
			</Link>
		</motion.div>
	)
}

export default TestBanner
