import { useQuery } from '@tanstack/react-query'
import { useStore } from 'effector-react'
import { ChangeEvent, useRef, useState } from 'react'

import { searchMods } from '@/features/search-mods/api'

import { IMod } from '@/shared/api/curse-forge'
import { searchModsBaseRequest } from '@/shared/config/mods'
import { useDebounce } from '@/shared/hooks'
import { ReactQueryKeys } from '@/shared/lib/react-query'

import { $selectedMods, deselectMod, selectMod } from '../../model'

export function useSelectMods() {
	const selectedMods = useStore($selectedMods)

	const [searchTerm, setSearchTerm] = useState<string>('')
	const [showList, setShowList] = useState(false)

	const debouncedSearch = useDebounce(searchTerm, searchTerm.trim().length === 0 ? 100 : 300)

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

	const resetSearch = () => {
		setSearchTerm('')
	}

	const handleToggleModSelection = (mod: IMod) => {
		const selected = selectedMods.find((m) => m.id === mod.id)

		if (selected) {
			deselectMod(mod)
		} else {
			selectMod(mod)
		}
	}

	return {
		mods,
		selectedMods,
		searchTerm,
		showList,
		containerRef,
		functions: {
			handleSearch,
			resetSearch,
			handleClickOutside,
			handleInputFocus,
			handleToggleModSelection,
		},
	}
}
