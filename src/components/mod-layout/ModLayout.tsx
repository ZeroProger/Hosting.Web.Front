import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { Tab, TabList, Tabs } from 'react-tabs'

import {
	getServerModFilesUrl,
	getServerModImagesUrl,
	getServerModRelationsUrl,
	getServerModUrl,
} from '@/config/url.config'

import ActiveLink from '../ui/active-link/ActiveLink'

import styles from './ModLayout.module.scss'
import { useModData } from './useModData'

enum ModLayoutPathIndexes {
	Description,
	Files,
	Images,
	Relations,
}

const ModLayout: FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter()
	const modIdString = String(router.query?.id!)
	const modId = parseInt(modIdString)
	const [tabIndex, setTabIndex] = useState(0)
	const { data: mod, isLoading, error } = useModData(modId)

	var pathsMap = new Map([
		[getServerModUrl(modIdString), ModLayoutPathIndexes.Description],
		[getServerModFilesUrl(modIdString), ModLayoutPathIndexes.Files],
		[getServerModImagesUrl(modIdString), ModLayoutPathIndexes.Images],
		[getServerModRelationsUrl(modIdString), ModLayoutPathIndexes.Relations],
	])

	useEffect(() => {
		setTabIndex(pathsMap.get(router.asPath)!)
	}, [router.asPath])

	//#TODO: Заменить
	if (isLoading) return <div>Загрузка...</div>
	if (error || !mod) return <div>Ошибка</div>

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
