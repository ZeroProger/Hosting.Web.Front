import Link from 'next/link'
import { FC } from 'react'

import { getServerCreateUrl } from '@/config/url.config'

import styles from './About.module.scss'

interface IAbout {}

const About: FC<IAbout> = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.title}>
					<span className="text-primary">Simple</span>
					<span className="text-secondaryDirt">Host</span>
				</div>
				<div className={styles.description}>
					<p>Новый хостинг серверов Minecraft!</p>
					<p>Теперь вы сможете создать сервер с модами за несколько минут!</p>
					<p>
						Минимальный пинг по России. Множество шаблонов создания сервера. Удобная панель
						управления.
					</p>
				</div>
				<div className={styles.start}>
					<Link href={getServerCreateUrl()}>Создать сервер</Link>
				</div>
				<Link href="#pricing-anchor" className={styles.scrollLink}>
					Наши тарифы
				</Link>
			</div>
		</div>
	)
}

export default About
