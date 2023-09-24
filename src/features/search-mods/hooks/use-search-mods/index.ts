import { useStore } from 'effector-react'
import { ChangeEvent, useRef, useState } from 'react'
import { useQuery } from 'react-query'

import { Mod, axiosCurseForge } from '@/shared/api/curse-forge'
import { searchModsBaseRequest } from '@/shared/config/mods'
import { useDebounce } from '@/shared/hooks'
import { ModUrls } from '@/shared/routes/urls'
import { $server } from '@/shared/store'

export function useSearchMods() {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [showList, setShowList] = useState(false)
	const server = useStore($server)

	const debouncedSearch = useDebounce(searchTerm, searchTerm.trim().length === 0 ? 0 : 600)

	const { isSuccess, data: mods } = useQuery(
		[ModUrls.search(server?.gameServerHash!) + debouncedSearch, debouncedSearch],
		() =>
			axiosCurseForge.post<{ data: Mod[] }>(ModUrls.search(server?.gameServerHash!), {
				...searchModsBaseRequest,
				searchFilter: debouncedSearch,
			}),
		{
			select: ({ data }) => data.data,
			enabled: !!debouncedSearch,
		}
	)

	const containerRef = useRef(null)

	const handleClickOutside = () => setShowList(false)

	const handleInputFocus = () => setShowList(true)

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value)
	}

	const resetSearch = () => {
		setSearchTerm('')
	}

	return {
		isSuccess,
		mods,
		searchTerm,
		showList,
		containerRef,
		functions: {
			handleSearch,
			resetSearch,
			handleClickOutside,
			handleInputFocus,
		},
	}
}
