import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { ServerConsole } from '@/pages-flat/server/console'

export async function generateMetadata({
	params,
}: {
	params: { serverHash: string }
}): Promise<Metadata> {
	const server = params.serverHash.substring(1, 10)

	return {
		...SeoConfig.server.console,
		title: SeoConfig.server.console.title(server),
	}
}

export default function ServerConsolePage() {
	return <ServerConsole />
}
