import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { getMod } from '@/layouts/mod-layout/api'
import { ModImages } from '@/pages-flat/mod-images'

export async function generateMetadata({
	params,
}: {
	params: { modId: number }
}): Promise<Metadata> {
	const response = await getMod(params.modId)

	return {
		...SeoConfig.server.modImages,
		title: SeoConfig.server.modImages.title(response?.data.data.name),
	}
}

/**
 * @returns Страница со скриншотами игрового процесса с использованием данной модификации.
 */
export default function ModImagesPage() {
	return <ModImages />
}
