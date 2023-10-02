import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { ServerTest } from '@/pages-flat/test-server'

export const metadata: Metadata = SeoConfig.server.testServer

/**
* @returns Страница с формой тестирования сервера.
*/
export default function ServerTestPage() {
	return <ServerTest />
}
