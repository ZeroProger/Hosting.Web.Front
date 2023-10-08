import { CForgeModClassType } from '@/shared/config/curse-forge'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { useStore } from 'effector-react'
import { popularWorldsRequest } from '../../config'
import { useFetchFilteredMods } from '../../queries'
import { ModCardsCompilation } from '../mod-cards-compilation'

export function WorldsCompilation() {
	const serverHash = useStore($serverHash)

	const { data: worlds } = useFetchFilteredMods(popularWorldsRequest)

	const viewAllLink = ModUrls.search(serverHash!, {
		classId: CForgeModClassType.Mods,
	})

	return (
		<ModCardsCompilation
			title="Популярные карты/миры"
			viewAllLink={viewAllLink}
			mods={worlds || []}
		/>
	)
}
