import { CForgeModClassType } from '@/shared/config/curse-forge'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { useStore } from 'effector-react'
import { popularPluginsRequest } from '../../config'
import { useFetchFilteredMods } from '../../queries'
import { ModCardsCompilation } from '../mod-cards-compilation'

export function PluginsCompilation() {
	const serverHash = useStore($serverHash)

	const { data: plugins } = useFetchFilteredMods(popularPluginsRequest)

	const viewAllLink = ModUrls.search(serverHash!, {
		classId: CForgeModClassType.Mods,
	})

	return (
		<ModCardsCompilation
			title="Популярные плагины"
			viewAllLink={viewAllLink}
			mods={plugins || []}
		/>
	)
}
