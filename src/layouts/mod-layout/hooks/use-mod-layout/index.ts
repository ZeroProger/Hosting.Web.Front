import { formatModDate, formatModDownloadsCount } from '@/shared/utils/format'

import { useModData, useModDescription } from '../../queries'

export function useModLayout(modId: number) {
	const { data: mod, isLoading: modLoading } = useModData(modId)
	const { data: modDescription, isLoading: descriptionLoading } = useModDescription(modId)

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
