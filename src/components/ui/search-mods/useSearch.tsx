import { FormElement } from '@nextui-org/react'
import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'

import { useDebounce } from '@/hooks/useDebounce'

import { CurseForgeService } from '@/services/curseforge.service'

import { getModsSearchUrl, searchModsBaseRequest } from '@/config/curseforge-api.config'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const debouncedSearch = useDebounce(searchTerm, 600)

	const { isSuccess, data } = useQuery(
		[getModsSearchUrl() + debouncedSearch, debouncedSearch],
		() => CurseForgeService.getMods({ ...searchModsBaseRequest, searchFilter: debouncedSearch }),
		{
			select: ({ data }) => data.data,
			enabled: !!debouncedSearch,
		}
	)

	const handleInput = (event: ChangeEvent<FormElement>) => {
		setSearchTerm(event.target.value)
	}

	const resetSearch = () => {
		setSearchTerm('')
	}

	return { isSuccess, handleInput, resetSearch, data, searchTerm }
}
