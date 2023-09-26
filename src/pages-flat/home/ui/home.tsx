import { About, Features, Qualities, TestBanner } from '@/widgets/home'

import styles from './styles.module.scss'

export function Home() {
	return (
		<section className={styles.container}>
			<About />
			<div className={styles.content}>
				<TestBanner />
				<Features />
				<Qualities />
				{/*<Pricing />
				 */}
			</div>
		</section>
	)
}
