import { Metadata } from 'next'

import { ServerOverview } from '@/pages-flat/server/overview'

export async function generateMetadata({
	params,
}: {
	params: { serverHash: string }
}): Promise<Metadata> {
	//const { data: server } = await ServerService.server(params.serverHash)

	return { title: `Основная информация о сервере` }
}

/**
 * @returns {JSX.Element} Страница с основной информацией о сервере
 */
export default async function ServerOverviewPage({ params }: { params: { serverHash: string } }) {
	return <ServerOverview />
}
