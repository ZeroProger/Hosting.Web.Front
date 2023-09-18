import { About } from '@/widgets/home/ui'

import styles from './home.module.scss'

export function Home() {
	return (
		<section className={styles.container}>
			<About />
			<div className={styles.content}>
				{/* <TestBanner />
				<Pricing />
				<Features />
				<Qualities /> */}
			</div>
		</section>
	)
}
