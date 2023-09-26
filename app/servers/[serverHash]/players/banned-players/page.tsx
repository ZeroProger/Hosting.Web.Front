import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { BannedPlayers } from '@/pages-flat/server/players/banned-players'

export async function generateMetadata({
	params,
}: {
	params: { serverHash: string }
}): Promise<Metadata> {
	const server = params.serverHash.substring(1, 10)

	return {
		...SeoConfig.server.bannedPlayers,
		title: SeoConfig.server.bannedPlayers.title(server),
	}
}

export default function BannedPlayersPage() {
	return <BannedPlayers />
}
