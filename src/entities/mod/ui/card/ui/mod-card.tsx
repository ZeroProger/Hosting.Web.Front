'use client'

import clsx from 'clsx'
import { useStore } from 'effector-react'
import { ArrowDownToLine, Clock3, PlusCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Mod } from '@/shared/api/curse-forge'
import { useFetchServer } from '@/shared/queries/server'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { Button } from '@/shared/ui/button'

import { useModCard } from '../hooks'

import styles from './styles.module.scss'

export function ModCard({ mod }: { mod: Mod }) {
	const serverHash = useStore($serverHash)

	const { data: server, isLoading } = useFetchServer(serverHash)

	const { isHover, formattedDownloadsCount, formattedUpdateDate, classTagName, functions } =
		useModCard(mod)

	const { handleAddModClick, handleMouseOver, handleMouseOut, handleCardClick } = functions

	return (
		<li
			className={clsx(styles.card, { [styles.hover]: isHover })}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
		>
			<Link href={ModUrls.mod(server?.gameServerHash!, mod.id)} onClick={handleCardClick}>
				<div className={styles.inner}>
					<div className={styles.art}>
						<Image
							src={mod.logo.thumbnailUrl}
							alt={`Логотип мода ${mod.name}`}
							width={144}
							height={144}
						/>
					</div>
					<div className={styles.details}>
						<h3 className={styles.name}>{mod.name}</h3>
						<div className={styles.author}>by {mod.authors.at(0)?.name}</div>
						<ul className={clsx(styles.detailsList, styles.short)}>
							<li className={styles.downloads}>
								<ArrowDownToLine size={18} />
								{formattedDownloadsCount}
							</li>
							<li className={styles.classTag}>
								<span>{classTagName}</span>
							</li>
						</ul>
						<div className={styles.moreInfo}>
							<p className={styles.description}>{mod.summary}</p>
							<ul className={styles.detailsList}>
								<li className={styles.downloads}>
									<ArrowDownToLine size={16} />
									{formattedDownloadsCount}
								</li>
								<li className={styles.updated}>
									<Clock3 size={16} />
									{formattedUpdateDate}
								</li>
							</ul>
							<ul className={styles.categoriesList}>
								<li className={styles.classTag}>
									<span>{classTagName}</span>
								</li>
							</ul>
							<div className={styles.actions}>
								<Button asChild variant="outline" size="sm" className="py-0 text-md w-full">
									<Link href={ModUrls.mod(server?.gameServerHash!, mod.id)}>Подробнее</Link>
								</Button>
								<Button
									variant="primary"
									size="sm"
									className="py-0 text-md w-full flex items-center gap-2 leading-[normal]"
									onClick={handleAddModClick}
								>
									<PlusCircle size={20} />
									Добавить
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</li>
	)
}
