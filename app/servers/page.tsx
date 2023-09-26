import { UserServers } from '@/pages-flat/user-servers'
import { SeoConfig } from '@/shared/config/common/seo'
import { Metadata } from 'next'

export const metadata: Metadata = SeoConfig.server.userServers

export default function ServersPage() {
	return <UserServers />
}
