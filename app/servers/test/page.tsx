import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { ServerTest } from '@/pages-flat/test-server'

export const metadata: Metadata = SeoConfig.server.testServer

export default function ServerTestPage() {
	return <ServerTest />
}
