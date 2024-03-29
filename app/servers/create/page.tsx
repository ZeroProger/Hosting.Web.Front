import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { ServerCreate } from '@/pages-flat/create-server'

export const metadata: Metadata = SeoConfig.server.createServer

/**
 * @returns Страница с формой создания сервера.
 */
export default function ServerCreatePage() {
	return <ServerCreate />
}
