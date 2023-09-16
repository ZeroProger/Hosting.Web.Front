import { Metadata } from 'next'

import { ServerOverview } from '@/pages/server/overview'

export const metadata: Metadata = {
	title: 'Страница сервера',
}

/**
 * @returns {JSX.Element} Страница с основной информацией о сервере
 */
export default async function ServerOverviewPage() {
	return <ServerOverview />
}
