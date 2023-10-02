'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { scrollTo } from '@/shared/lib/utils'
import { ServerUrls } from '@/shared/routes/urls'
import { Button } from '@/shared/ui/button'

import styles from './styles.module.scss'

export function About() {
	return (
		<motion.div
			className={styles.container}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0, duration: 1, ease: 'easeInOut' }}
		>
			<div className={styles.content}>
				<motion.div
					className={styles.title}
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 0.6, duration: 0.4 }}
				>
					<span className="text-primary">Simple</span>
					<span className="text-secondaryDirt">Host</span>
				</motion.div>
				<div className={styles.description}>
					<motion.p
						initial={{ x: -2000 }}
						animate={{ x: 0 }}
						transition={{ delay: 0.7, duration: 0.6, ease: 'backInOut' }}
					>
						Новый хостинг серверов Minecraft!
					</motion.p>
					<motion.p
						initial={{ x: 2000 }}
						animate={{ x: 0 }}
						transition={{ delay: 1.1, duration: 0.6, ease: 'backInOut' }}
					>
						Теперь вы сможете создать сервер с модами за{' '}
						<span className="text-primary">несколько минут!</span>
					</motion.p>
					<motion.div
						initial={{ x: 2000 }}
						animate={{ x: 0 }}
						transition={{ delay: 1.9, duration: 0.6, ease: 'backInOut' }}
					>
						<p>
							<span className="text-primary font-bold">✓</span> Минимальный пинг по всей России.
						</p>
						<p>
							<span className="text-primary font-bold">✓</span> Множество шаблонов создания сервера.
						</p>
						<p>
							<span className="text-primary font-bold">✓</span> Удобная панель управления.
						</p>
					</motion.div>
				</div>
				<motion.div
					className={styles.start}
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 2.5, duration: 0.4 }}
				>
					<Button asChild variant="primary" className="text-xl">
						<Link href={ServerUrls.createServer()}>Создать сервер</Link>
					</Button>
				</motion.div>
				<motion.div
					className={styles.scrollLink}
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 2.8, duration: 0.4 }}
				>
					<Button
						onClick={() => {
							scrollTo('pricing')
						}}
						variant="primary"
						className="text-xl"
					>
						Наши тарифы
					</Button>
				</motion.div>
			</div>
		</motion.div>
	)
}
