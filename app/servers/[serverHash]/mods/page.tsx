import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { Mods } from '@/pages-flat/mods'

export const metadata: Metadata = SeoConfig.server.mods

export default function ModsPage() {
	return <Mods />
}
