'use client'

import { CForgeModClassType } from '@/shared/config/curse-forge'
import { JoyrideGuide, modsSteps } from '@/shared/lib/react-joyride'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { useStore } from 'effector-react'
import { useRouter } from 'next/navigation'
import { CallBackProps } from 'react-joyride'
import { popularModsRequest } from '../../config'
import { useFetchFilteredMods } from '../../queries'
import { ModCardsCompilation } from '../mod-cards-compilation'

export function ModsCompilation() {
	const router = useRouter()
	const serverHash = useStore($serverHash)

	const { data: mods } = useFetchFilteredMods(popularModsRequest)

	const viewAllLink = ModUrls.search(serverHash!, {
		classId: CForgeModClassType.Mods,
	})

	const joyrideCallback = ({ status }: CallBackProps) => {
		if (status === 'finished') {
			router.push(ModUrls.mod(serverHash!, mods?.[0].id!))
		}
	}

	return (
		<>
			<JoyrideGuide
				steps={modsSteps}
				callback={joyrideCallback}
				scrollOffset={150}
				run={mods && mods.length > 0}
			/>
			<div id="mods-compilation-step">
				<ModCardsCompilation title="Популярные моды" viewAllLink={viewAllLink} mods={mods || []} />
			</div>
		</>
	)
}
