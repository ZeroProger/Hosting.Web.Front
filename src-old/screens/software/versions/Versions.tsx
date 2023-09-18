import { useRouter } from 'next/router'
import { FC } from 'react'
import { useQuery } from 'react-query'

import Heading from '@/components/ui/heading/Heading'

import { IParams } from '@/shared/types/base.types'

import { CurseForgeService } from '@/services/curseforge.service'

import { getMinecraftVersionsUrl, getModloadersUrl } from '@/config/api/curseforge-api.config'

import styles from './Versions.module.scss'

interface IVersions {}

const Versions: FC<IVersions> = () => {
	const router = useRouter()
	const slug = (router.query as IParams).slug

	const { data: vanilaVersions } = useQuery(
		getMinecraftVersionsUrl(),
		() => CurseForgeService.getMinecraftVersions(),
		{ select: (data) => data.data }
	)

	const { data: softwareVersions } = useQuery(
		getModloadersUrl(),
		() => CurseForgeService.getSoftwaresVersions(),
		{ select: (data) => data.data }
	)

	const software = (router.query as IParams)?.software!

	return (
		<div className={styles.container}>
			<Heading title={software} capitalize />
			{!vanilaVersions && <div>Загрузка...</div>}
			{/* <div
				className={clsx(styles.versions, {
					[styles.versionsGrid]: modloadersVersions.data[0].versions !== undefined,
				})}
			>
				<>
					{type === 'vanila' ? (
						<>
							{vanilaVersions.data.map((version) => (
								<Link
									key={version.gameVersionId}
									href={getServerVersionUrl(slug, software, version.version)}
									className={styles.version}
								>
									<div className={styles.name}>{version.version}</div>
								</Link>
							))}
						</>
					) : (
						<>
							{modloadersVersions.data.map((version) => (
								<div className={styles.modloader} key={version.gameVersion}>
									<div className={styles.name}>{version.gameVersion}</div>
									<div className={styles.modloaderVersions}>
										{version.versions?.map((modloader) => (
											<Link
												key={modloader.modloaderVersion}
												href={getServerVersionUrl(slug, software, modloader.modloaderVersion)}
												className={styles.modloaderVersion}
											>
												{modloader.formattedVersion}
												{modloader.recommended || modloader.latest ? (
													<>
														{modloader.recommended && (
															<Tooltip
																content={'Рекомендованная'}
																hideArrow
																css={{
																	'&.nextui-tooltip-content': {
																		borderWidth: '2px',
																		borderColor: lightGray,
																		'& .nextui-tooltip': {
																			padding: '0 10px',
																			fontSize: '1.25rem',
																		},
																	},
																}}
															>
																<Icon name="MdStars" size={32} fill={primary} />
															</Tooltip>
														)}
														{modloader.latest && (
															<Tooltip
																content={'Последняя'}
																hideArrow
																css={{
																	'&.nextui-tooltip-content': {
																		borderWidth: '2px',
																		borderColor: lightGray,
																		'& .nextui-tooltip': {
																			padding: '0 10px',
																			fontSize: '1.25rem',
																		},
																	},
																}}
															>
																<Icon name="MdNewReleases" size={32} fill={primary} />
															</Tooltip>
														)}
													</>
												) : null}
											</Link>
										))}
									</div>
								</div>
							))}
						</>
					)}
				</>
			</div> */}
		</div>
	)
}

export default Versions

{
	/* 				<Link
						key={version.id || version.label}
						href={getServerVersionUrl(slug, software, version.slug || '')}
						className={styles.version}
					></Link> */
}

// {version.recommended && <Icon name="MdStars" size={32} fill={primary} />}
// 						{version.latest && <Icon name="MdNewReleases" size={32} fill={primary} />}
// 						{version.versions ? (
// 							<div className={styles.modloader}>
// 								{version.versions.map((modloader) => (
// 									<>
// 										<div key={modloader.id} className={styles.name}></div>
// 										<div className={styles.modloaderVersions}>
// 											<Link href={getServerVersionUrl()}>{}</Link>
// 										</div>
// 									</>
// 								))}
// 							</div>
// 						) : (
// 							<div className={styles.name}>{version.label}</div>
// 						)}
