import { formatModDate, formatModDownloadsCount } from '@/shared/utils/format'

import { useFetchMod, useFetchModDescription } from '../../queries'

export function useModLayout(modId: number) {
	const { data: mod, isLoading: modLoading } = useFetchMod(modId)
	const { data: modDescription, isLoading: descriptionLoading } = useFetchModDescription(modId)

	const isLoading = modLoading || descriptionLoading

	const formattedDateCreated = formatModDate(mod?.dateCreated!)
	const formattedDateModified = formatModDate(mod?.dateModified!)

	const formattedDownloadsCount = formatModDownloadsCount(mod?.downloadCount!)

	return {
		mod,
		isLoading,
		formattedDateCreated,
		formattedDateModified,
		formattedDownloadsCount,
	}
}
