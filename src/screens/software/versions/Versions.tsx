import { Tooltip } from '@nextui-org/react'
import clsx from 'clsx'
import { fabricVersions, vanilaVersions } from 'fakeData/curseforge.data'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { Icon } from '@/components/ui/Icon'
import Heading from '@/components/ui/heading/Heading'

import { IParams } from '@/shared/types/base.types'
import { ICForgeVersion } from '@/shared/types/curseforge.types'

import { lightGray, primary } from '@/config/constants'
import { getServerVersionUrl } from '@/config/url.config'

import styles from './Versions.module.scss'

interface IVersions {}

const Versions: FC<IVersions> = () => {
	const router = useRouter()
	const [versions, setVersions] = useState<ICForgeVersion[]>([])
	const { slug, software } = router.query as IParams

	useEffect(() => {
		if (software === 'vanila') {
			setVersions(vanilaVersions)
		} else {
			setVersions(fabricVersions)
		}
	}, [software])

	return (
		<div className={styles.container}>
			<Heading title={software} capitalize />
			{!versions && <div>Загрузка...</div>}
			<div
				className={clsx(styles.versions, {
					[styles.versionsGrid]: versions[0]?.versions !== undefined,
				})}
			>
				{versions.map((version) => (
					<>
						{version.versions ? (
							<div className={styles.modloader}>
								<div className={styles.name}>{version.label}</div>
								<div className={styles.modloaderVersions}>
									{version.versions.map((modloader) => (
										<Link
											key={modloader.id}
											href={getServerVersionUrl(slug, software, modloader.slug)}
											className={styles.modloaderVersion}
										>
											{modloader.label}
											{modloader.recommended || modloader.latest ? (
												<Tooltip
													content={modloader.recommended ? 'Рекомендованная' : 'Последняя'}
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
													{modloader.recommended && (
														<Icon name="MdStars" size={32} fill={primary} />
													)}
													{modloader.latest && (
														<Icon name="MdNewReleases" size={32} fill={primary} />
													)}
												</Tooltip>
											) : null}
										</Link>
									))}
								</div>
							</div>
						) : (
							<Link
								key={version.id}
								href={getServerVersionUrl(slug, software, version.slug)}
								className={styles.version}
							>
								<div className={styles.name}>{version.label}</div>
							</Link>
						)}
					</>
				))}
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
