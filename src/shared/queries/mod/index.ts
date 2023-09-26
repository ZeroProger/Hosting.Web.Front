import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

import { ReactQueryKeys } from '@/shared/lib/react-query'

import { getGameVersions, getGroupedCategories, getModsCategories } from './api'

export function useCategories() {
	const searchParams = useSearchParams()

	const classId = searchParams.get('classId')

	return useQuery({
		queryKey: [ReactQueryKeys.modsCategories, classId],
		queryFn: () => getModsCategories(classId),
		select: ({ data }) => data.data.sort((a, b) => a.name.localeCompare(b.name)),
	})
}

export function useGroupedCategories() {
	return useQuery({
		queryKey: [ReactQueryKeys.modsGroupedCategories],
		queryFn: () => getGroupedCategories(),
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		select: ({ data }) => data.data,
	})
}

export function useGameVersions() {
	return useQuery({
		queryKey: [ReactQueryKeys.modsGameVersions],
		queryFn: () => getGameVersions({ sortDescending: true }),
		select: ({ data }) => data.data,
	})
}
