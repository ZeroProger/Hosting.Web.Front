import About from '@/components/home-page/about/About'
import Features from '@/components/home-page/features/Features'
import Pricing from '@/components/home-page/pricing/Pricing'
import Qualities from '@/components/home-page/qualities/Qualities'
import TestBanner from '@/components/home-page/test-banner/TestBanner'

import styles from './Home.module.scss'

export function Home() {
	return (
		<section className={styles.container}>
			<About />
			<div className={styles.content}>
				<TestBanner />
				<Pricing />
				<Features />
				<Qualities />
			</div>
		</section>
	)
}
