import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { ServerCreate } from '@/pages-flat/server/create'

export const metadata: Metadata = SeoConfig.server.createServer

export default function ServerCreatePage() {
	return <ServerCreate />
}
