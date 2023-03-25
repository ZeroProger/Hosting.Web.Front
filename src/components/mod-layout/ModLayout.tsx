import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { Tab, TabList, Tabs } from 'react-tabs'

import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import {
	getServerModFilesUrl,
	getServerModImagesUrl,
	getServerModRelationsUrl,
	getServerModUrl,
} from '@/config/url.config'

import { fetchModDescription } from '@/store/actions/mods'

import ActiveLink from '../ui/active-link/ActiveLink'

import styles from './ModLayout.module.scss'

enum ModLayoutPathIndexes {
	Description,
	Files,
	Images,
	Relations,
}

const ModLayout: FC<PropsWithChildren> = ({ children }) => {
	const dispatch = useAppDispatch()
	const router = useRouter()
	const modIdString = String(router.query?.id!)
	const modId = parseInt(modIdString)
	const [tabIndex, setTabIndex] = useState(0)
	const description = useTypedSelector((state) => state.modsReducer.modDescription)

	var pathsMap = new Map([
		[getServerModUrl(modIdString), ModLayoutPathIndexes.Description],
		[getServerModFilesUrl(modIdString), ModLayoutPathIndexes.Files],
		[getServerModImagesUrl(modIdString), ModLayoutPathIndexes.Images],
		[getServerModRelationsUrl(modIdString), ModLayoutPathIndexes.Relations],
	])

	useEffect(() => {
		setTabIndex(pathsMap.get(router.asPath)!)
	}, [router.asPath])

	useEffect(() => {
		if (!Number.isNaN(modId)) {
			dispatch(fetchModDescription(modId))
		}
	}, [modId])

	return (
		<div className={styles.container}>
			<div className={styles.search}></div>
			<nav className={styles.breadcrumbs}></nav>
			<div className={styles.modHeader}></div>
			<aside className={styles.aside}></aside>
			<ul className={styles.tabs}>
				<Tabs selectedIndex={tabIndex || 0} onSelect={(index) => setTabIndex(index)}>
					<TabList>
						<Tab>
							<ActiveLink href={getServerModUrl(modIdString)} activeClassName="active">
								Описание
							</ActiveLink>
						</Tab>
						<Tab>
							<ActiveLink href={getServerModFilesUrl(modIdString)} activeClassName="active">
								Файлы
							</ActiveLink>
						</Tab>
						<Tab>
							<ActiveLink href={getServerModImagesUrl(modIdString)} activeClassName="active">
								Изображения
							</ActiveLink>
						</Tab>
						<Tab>
							<ActiveLink href={getServerModRelationsUrl(modIdString)} activeClassName="active">
								Зависимости
							</ActiveLink>
						</Tab>
					</TabList>
				</Tabs>
			</ul>
			<section className={styles.tabContent}>{children}</section>
		</div>
	)
}

export default ModLayout
