import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { UserServers } from '@/pages-flat/user-servers'

export const metadata: Metadata = SeoConfig.server.userServers

/**
* @returns Страница со списком серверов текущего пользователя.
*/
export default function ServersPage() {
	return <UserServers />
}
