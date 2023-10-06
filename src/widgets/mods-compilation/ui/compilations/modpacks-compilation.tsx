import { CForgeModClassType } from '@/shared/config/curse-forge'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { useStore } from 'effector-react'
import { popularModpacksRequest } from '../../config'
import { useFetchFilteredMods } from '../../queries'
import { ModCardsCompilation } from '../mod-cards-compilation'

export function ModpacksCompilation() {
	const serverHash = useStore($serverHash)

	const { data: modpacks } = useFetchFilteredMods(popularModpacksRequest)

	const viewAllLink = ModUrls.search(serverHash!, {
		classId: CForgeModClassType.Mods,
	})

	return (
		<ModCardsCompilation
			title="Популярные сборки модов"
			viewAllLink={viewAllLink}
			mods={modpacks || []}
		/>
	)
}
