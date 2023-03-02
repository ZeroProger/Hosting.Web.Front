import { FC } from 'react'

import About from '@/components/home-page/about/About'
import Features from '@/components/home-page/features/Features'
import Pricing from '@/components/home-page/pricing/Pricing'
import Qualities from '@/components/home-page/qualities/Qualities'
import TestBanner from '@/components/home-page/test-banner/TestBanner'

import styles from './Home.module.scss'

interface IHome {}

const Home: FC<IHome> = () => {
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

export default Home
