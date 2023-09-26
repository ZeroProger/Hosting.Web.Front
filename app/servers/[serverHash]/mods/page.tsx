import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { Mods } from '@/pages-flat/mods'

export const metadata: Metadata = SeoConfig.server.mods

/**
 * @returns Страница с подборками популярных модификаций, доступных к установке на сервер.
 */
export default function ModsPage() {
	return <Mods />
}
