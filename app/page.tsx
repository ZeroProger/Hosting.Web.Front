import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { Home } from '@/pages-flat/home'

export const metadata: Metadata = SeoConfig.common.home

/**
 * @returns {JSX.Element} Главная страница
 */
export default async function HomePage() {
	return <Home />
}
