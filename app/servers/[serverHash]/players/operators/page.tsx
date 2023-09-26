import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { ServerOperators } from '@/pages-flat/server-operators'

export async function generateMetadata({
	params,
}: {
	params: { serverHash: string }
}): Promise<Metadata> {
	const server = params.serverHash.substring(1, 10)

	return {
		...SeoConfig.server.operators,
		title: SeoConfig.server.operators.title(server),
	}
}

export default function ServerOperatorsPage() {
	return <ServerOperators />
}
