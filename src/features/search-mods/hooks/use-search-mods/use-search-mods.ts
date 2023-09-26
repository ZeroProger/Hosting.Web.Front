import { useQuery } from '@tanstack/react-query'
import { useStore } from 'effector-react'
import { ChangeEvent, useRef, useState } from 'react'

import { searchModsBaseRequest } from '@/shared/config/mods'
import { useDebounce } from '@/shared/hooks'
import { ReactQueryKeys } from '@/shared/lib/react-query'
import { useFetchServer } from '@/shared/queries/server'
import { $serverHash } from '@/shared/store'

import { searchMods } from '../../api'

export function useSearchMods() {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [showList, setShowList] = useState(false)

	const serverHash = useStore($serverHash)

	const { data: server, isLoading } = useFetchServer(serverHash)

	const debouncedSearch = useDebounce(searchTerm, searchTerm.trim().length === 0 ? 0 : 600)

	const { isSuccess, data: mods } = useQuery({
		queryKey: [ReactQueryKeys.searchMods, debouncedSearch],
		queryFn: () => searchMods({ ...searchModsBaseRequest, searchFilter: debouncedSearch }),
		select: ({ data }) => data.data,
		enabled: !!debouncedSearch,
	})

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
