import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { Home } from '@/pages-flat/home'

export const metadata: Metadata = SeoConfig.common.home

/**
 * @returns Главная страница сайта.
 */
export default async function HomePage() {
	return <Home />
}
