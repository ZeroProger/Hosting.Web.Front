import { ServerPlayers } from '@/pages-flat/server/players'

import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'
export async function generateMetadata({
	params,
}: {
	params: { serverHash: string }
}): Promise<Metadata> {
	const server = params.serverHash.substring(1, 10)

	return {
		...SeoConfig.server.players,
		title: SeoConfig.server.players.title(server),
	}
}

export default function ServerPlayersPage() {
	return <ServerPlayers />
}
