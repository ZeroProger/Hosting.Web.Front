import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { ServerBackups } from '@/pages-flat/server/backups'

export async function generateMetadata({
	params,
}: {
	params: { serverHash: string }
}): Promise<Metadata> {
	const server = params.serverHash.substring(1, 10)

	return {
		...SeoConfig.server.backups,
		title: SeoConfig.server.backups.title(server),
	}
}

export default function ServerBackupsPage() {
	return <ServerBackups />
}
