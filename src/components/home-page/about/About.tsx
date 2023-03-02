import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC } from 'react'

import { scrollTo } from '@/utils/scroll/scrollTo'

import { getServerCreateUrl } from '@/config/url.config'

import styles from './About.module.scss'

interface IAbout {}

const About: FC<IAbout> = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<motion.div
					className={styles.title}
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 0, duration: 0.4 }}
				>
					<span className="text-primary">Simple</span>
					<span className="text-secondaryDirt">Host</span>
				</motion.div>
				<div className={styles.description}>
					<motion.p
						initial={{ x: -2000 }}
						animate={{ x: 0 }}
						transition={{ delay: 0.1, duration: 0.6, ease: 'backInOut' }}
					>
						Новый хостинг серверов Minecraft!
					</motion.p>
					<motion.p
						initial={{ x: 2000 }}
						animate={{ x: 0 }}
						transition={{ delay: 0.5, duration: 0.6, ease: 'backInOut' }}
					>
						Теперь вы сможете создать сервер с модами за{' '}
						<span className="text-primary">несколько минут!</span>
					</motion.p>
					<motion.p
						initial={{ x: -2000 }}
						animate={{ x: 0 }}
						transition={{ delay: 0.9, duration: 0.6, ease: 'backInOut' }}
					>
						<span className="text-primary">Только у нас:</span> возможность вывести ваш локальный
						сервер в сеть!
					</motion.p>
					<motion.div
						initial={{ x: 2000 }}
						animate={{ x: 0 }}
						transition={{ delay: 1.3, duration: 0.6, ease: 'backInOut' }}
					>
						<p>
							<span className="text-primary font-bold">✓</span> Минимальный пинг по России.
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
					transition={{ delay: 1.9, duration: 0.4 }}
				>
					<Link href={getServerCreateUrl()}>Создать сервер</Link>
				</motion.div>
				<motion.button
					type="button"
					onClick={() => {
						scrollTo('pricing')
					}}
					className={styles.scrollLink}
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 2.2, duration: 0.4 }}
				>
					Наши тарифы
				</motion.button>
			</div>
		</div>
	)
}

export default About
