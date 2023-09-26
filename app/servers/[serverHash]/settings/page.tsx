import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { ServerSettings } from '@/pages-flat/server-settings'

export async function generateMetadata({
	params,
}: {
	params: { serverHash: string }
}): Promise<Metadata> {
	const server = params.serverHash.substring(1, 10)

	return {
		...SeoConfig.server.settings,
		title: SeoConfig.server.settings.title(server),
	}
}

export default function ServerSettingsPage() {
	return <ServerSettings />
}
