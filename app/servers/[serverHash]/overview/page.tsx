import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { ServerOverview } from '@/pages-flat/server-overview'

export async function generateMetadata({
	params,
}: {
	params: { serverHash: string }
}): Promise<Metadata> {
	const server = params.serverHash.substring(1, 10)

	return {
		...SeoConfig.server.overview,
		title: SeoConfig.server.overview.title(server),
	}
}

/**
 * @returns {JSX.Element} Страница с основной информацией о сервере
 */
export default async function ServerOverviewPage({ params }: { params: { serverHash: string } }) {
	return <ServerOverview />
}
