import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { Icon } from '@/components/ui/Icon'
import Heading from '@/components/ui/heading/Heading'

import { IParams } from '@/shared/types/base.types'
import { CForgeModLoaderType, ICForgeVersion } from '@/shared/types/curseforge.types'

import { CurseForgeService } from '@/services/curseforge.service'

import { uniqueObjectsInArray } from '@/utils/objects/uniqueObjects'

import { primary } from '@/config/constants'
import { getServerVersionUrl } from '@/config/url.config'

import styles from './Versions.module.scss'

interface IVersions {}

const Versions: FC<IVersions> = () => {
	const router = useRouter()
	const [versions, setVersions] = useState<ICForgeVersion[]>([])
	const { slug, software } = router.query as IParams

	const { data: vanilaVersions } = useQuery(
		'get vanila versions',
		() => CurseForgeService.getMinecraftVersions(),
		{
			select: (data) => data.data.data,
		}
	)

	const { data: forgeVersions } = useQuery(
		'get forge versions',
		() => CurseForgeService.getModloaders('', true),
		{
			select: (data) => data.data.data.filter((modloader) => modloader.type === 1),
		}
	)

	const { data: fabricVersions } = useQuery(
		'get fabric versions',
		() => CurseForgeService.getModloaders('', true),
		{
			select: (data) => data.data.data.filter((modloader) => modloader.type === 4),
		}
	)

	useEffect(() => {
		if (software === CForgeModLoaderType.Vanila) {
			console.log(vanilaVersions)
			setVersions(
				vanilaVersions?.map((version) => {
					return { id: version.id, gameVersion: version.versionString } as ICForgeVersion
				}) || []
			)
		}
		if (software === CForgeModLoaderType.Fabric) {
			setVersions(
				uniqueObjectsInArray(
					fabricVersions?.filter((version) => {
						if (version.latest || version.recommended) {
							return {
								id: version.id,
								name: version.name,
								gameVersion: version.gameVersion,
								latest: version.latest,
								recommended: version.recommended,
							} as ICForgeVersion
						}
					}) || [],
					'gameVersion'
				) || []
			)
		}
		if (software === CForgeModLoaderType.Forge) {
			setVersions(
				uniqueObjectsInArray(
					forgeVersions?.filter((version) => {
						if (version.latest || version.recommended) {
							return {
								id: version.id,
								name: version.name,
								gameVersion: version.gameVersion,
								latest: version.latest,
								recommended: version.recommended,
							} as ICForgeVersion
						}
					}) || [],
					'gameVersion'
				).sort((a, b) => {
					const ver1 = a.gameVersion || ''
					const ver2 = b.gameVersion || ''

					return ver2.localeCompare(ver1) - (ver2.length - ver1.length)
				})
			)
		}
	}, [software])

	return (
		<div className={styles.container}>
			<Heading title={software} className="capitalize" />
			{!versions && <div>Загрузка...</div>}
			<div className={styles.versions}>
				{versions.map((version) => (
					<Link
						key={version.id || version.name}
						href={getServerVersionUrl(slug, software, version.gameVersion || '')}
						className={styles.version}
					>
						<div className={styles.name}>
							{version.gameVersion}
							{version.name && ` (${version.name?.split('-')[1]})`}
							{version.recommended && <Icon name="MdStars" size={32} fill={primary} />}
							{version.latest && <Icon name="MdNewReleases" size={32} fill={primary} />}
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Versions
