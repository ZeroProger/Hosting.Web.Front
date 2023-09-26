import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { ModsSearch } from '@/pages-flat/mods-search'

export async function generateMetadata({
	searchParams,
}: {
	searchParams: { [key: string]: string }
}): Promise<Metadata> {
	const searchFilter = searchParams.searchFilter

	return {
		...SeoConfig.server.modsSearch,
		title: SeoConfig.server.modsSearch.title(searchFilter),
	}
}

/**
 * @returns Страница со списком модов, найденных по текстовому запросу.
 */
export default function ModsSearchPage() {
	return <ModsSearch />
}
