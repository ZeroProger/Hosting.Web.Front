import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { UserServers } from '@/pages-flat/user-servers'

export const metadata: Metadata = SeoConfig.server.userServers

export default function ServersPage() {
	return <UserServers />
}
