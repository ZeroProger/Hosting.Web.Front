import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { PublicServers } from '@/pages-flat/public-servers'

export const metadata: Metadata = SeoConfig.server.publicServers

/**
 * @returns Страница со списком публичных серверов.
 */
export default function PublicServersPage() {
	return <PublicServers />
}
