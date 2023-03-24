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

enum ModLayoutPathIndexes {
	Description,
	Files,
	Images,
	Relations,
}

const ModLayout: FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter()
	const modId = String(router.query?.id!)
	const [tabIndex, setTabIndex] = useState(0)

	var pathsMap = new Map([
		[getServerModUrl(modId), ModLayoutPathIndexes.Description],
		[getServerModFilesUrl(modId), ModLayoutPathIndexes.Files],
		[getServerModImagesUrl(modId), ModLayoutPathIndexes.Images],
		[getServerModRelationsUrl(modId), ModLayoutPathIndexes.Relations],
	])

	useEffect(() => {
		setTabIndex(pathsMap.get(router.asPath)!)
	}, [router.asPath])

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
							<ActiveLink href={getServerModUrl(modId)} activeClassName="active">
								Описание
							</ActiveLink>
						</Tab>
						<Tab>
							<ActiveLink href={getServerModFilesUrl(modId)} activeClassName="active">
								Файлы
							</ActiveLink>
						</Tab>
						<Tab>
							<ActiveLink href={getServerModImagesUrl(modId)} activeClassName="active">
								Изображения
							</ActiveLink>
						</Tab>
						<Tab>
							<ActiveLink href={getServerModRelationsUrl(modId)} activeClassName="active">
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
