import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { WhiteList } from '@/pages-flat/server/players/white-list'

export async function generateMetadata({
	params,
}: {
	params: { serverHash: string }
}): Promise<Metadata> {
	const server = params.serverHash.substring(1, 10)

	return {
		...SeoConfig.server.whiteList,
		title: SeoConfig.server.whiteList.title(server),
	}
}

export default function WhitelistPage() {
	return <WhiteList />
}
