import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { BannedIps } from '@/pages-flat/server/players/banned-ips'

export async function generateMetadata({
	params,
}: {
	params: { serverHash: string }
}): Promise<Metadata> {
	const server = params.serverHash.substring(1, 10)

	return {
		...SeoConfig.server.bannedIps,
		title: SeoConfig.server.bannedIps.title(server),
	}
}

export default function BannedIpsPage() {
	return <BannedIps />
}
