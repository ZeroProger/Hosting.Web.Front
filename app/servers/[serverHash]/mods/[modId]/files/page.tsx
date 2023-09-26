import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { getMod } from '@/layouts/mod-layout/api'
import { ModFiles } from '@/pages-flat/mod/files'

export async function generateMetadata({
	params,
}: {
	params: { modId: number }
}): Promise<Metadata> {
	const { data } = await getMod(params.modId)

	return {
		...SeoConfig.server.modFiles,
		title: SeoConfig.server.modFiles.title(data.data.name),
	}
}

export default function ModFilesPage() {
	return <ModFiles />
}
