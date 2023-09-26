import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { ServerFiles } from '@/pages-flat/server-files'

export async function generateMetadata({
	params,
}: {
	params: { serverHash: string }
}): Promise<Metadata> {
	const server = params.serverHash.substring(1, 10)

	return {
		...SeoConfig.server.files,
		title: SeoConfig.server.files.title(server),
	}
}

export default function ServerFilesPage() {
	return <ServerFiles />
}
