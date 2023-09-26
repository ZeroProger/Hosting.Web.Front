import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { getMod } from '@/layouts/mod-layout/api'
import { ModDescription } from '@/pages-flat/mod-description'

export async function generateMetadata({
	params,
}: {
	params: { modId: number }
}): Promise<Metadata> {
	const { data } = await getMod(params.modId)

	return {
		...SeoConfig.server.mod,
		title: SeoConfig.server.mod.title(data.data.name),
	}
}

/**
 * @returns Страница с описанием модификации (отображает HTML-разметку описания модификации).
 */
export default function ModPage({ params }: { params: { modId: number } }) {
	return <ModDescription modId={params.modId} />
}
