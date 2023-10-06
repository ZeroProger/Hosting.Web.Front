import { useQuery } from '@tanstack/react-query'
import { useStore } from 'effector-react'
import { useRouter } from 'next/navigation'
import { ChangeEvent, KeyboardEventHandler, useEffect, useRef, useState } from 'react'

import { searchModsBaseRequest } from '@/shared/config/mods'
import { useDebounce, useSearchParams } from '@/shared/hooks'
import { ReactQueryKeys } from '@/shared/lib/react-query'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'

import { searchMods } from '../../api'

export function useSearchMods(hideList?: boolean) {
	const router = useRouter()
	const searchParams = useSearchParams()

	const [searchTerm, setSearchTerm] = useState<string>('')
	const [showList, setShowList] = useState(false)

	const serverHash = useStore($serverHash)

	const debouncedSearch = useDebounce(searchTerm, searchTerm.trim().length === 0 ? 100 : 600)

	const { data: mods } = useQuery({
		queryKey: [ReactQueryKeys.searchMods, debouncedSearch],
		queryFn: () => searchMods({ ...searchModsBaseRequest, searchFilter: debouncedSearch }),
		select: ({ data }) => data.data,
		enabled: !!debouncedSearch,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
	})

	const containerRef = useRef(null)

	const handleClickOutside = () => setShowList(false)

	const handleInputFocus = () => setShowList(true)

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value)
	}

	const handleSearchEnterPress: KeyboardEventHandler<HTMLInputElement> = (event) => {
		if (event.key === 'Enter') {
			router.push(ModUrls.search(serverHash!, { ...searchParams, searchFilter: searchTerm }))
		}
	}

	const resetSearch = () => {
		setSearchTerm('')
	}

	useEffect(() => {
		setSearchTerm(String(searchParams.searchFilter || ''))
	}, [])

	useEffect(() => {
		if (hideList) {
			router.push(ModUrls.search(serverHash!, { ...searchParams, searchFilter: debouncedSearch }))
		}
	}, [hideList, debouncedSearch, router, serverHash, searchParams])

	return {
		mods,
		searchTerm,
		showList,
		containerRef,
		functions: {
			handleSearch,
			resetSearch,
			handleClickOutside,
			handleInputFocus,
			handleSearchEnterPress,
		},
	}
}
