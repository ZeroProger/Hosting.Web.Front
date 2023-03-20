import { Tooltip } from '@nextui-org/react'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { Icon } from '@/components/ui/Icon'
import Heading from '@/components/ui/heading/Heading'

import { IParams } from '@/shared/types/base.types'
import { ICForgeMinecraftVersion, ICForgeModloaderVersion } from '@/shared/types/curseforge.types'

import { lightGray, primary } from '@/config/constants'
import { getServerVersionUrl } from '@/config/url.config'

import styles from './Versions.module.scss'

interface IVersions {
	versions: { data: ICForgeMinecraftVersion[] } | { data: ICForgeModloaderVersion[] }
	type: string
}

const Versions: FC<IVersions> = ({ versions, type }) => {
	const router = useRouter()
	const { slug, software } = router.query as IParams
	const vanilaVersions = versions as { data: ICForgeMinecraftVersion[] }
	const modloadersVersions = versions as { data: ICForgeModloaderVersion[] }

	return (
		<div className={styles.container}>
			<Heading title={software} capitalize />
			{!versions && <div>Загрузка...</div>}
			<div
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
			</div>
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
