'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { ServerUrls } from '@/shared/routes/urls'
import { Button } from '@/shared/ui/button'

import styles from './styles.module.scss'

export function TestBanner() {
	return (
		<motion.div
			className={styles.container}
			initial={{ scale: 0, opacity: 0 }}
			whileInView={{ scale: 1, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay: 0, duration: 0.6, ease: 'backInOut' }}
		>
			<div className={styles.title}>1 день полностью бесплатно!</div>
			<div className={styles.description}>Тестирование игрового сервера</div>
			<Button asChild className="text-2xl rounded-full sm:text-xl" variant="primary">
				<Link href={ServerUrls.testServer()}>Начать тестировать</Link>
			</Button>
		</motion.div>
	)
}
