import { useRouter } from 'next/router'
import { FC } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import ActiveLink from '@/components/ui/active-link/ActiveLink'

import {
	getServerModFilesUrl,
	getServerModImagesUrl,
	getServerModRelationsUrl,
	getServerModUrl,
} from '@/config/url.config'

import styles from './ServerMod.module.scss'

interface IServerMod {
	description: string
}

const ServerMod: FC<IServerMod> = ({ description }) => {
	const router = useRouter()
	const modId = String(router.query?.id!)
	return (
		<div className={styles.container}>
			<div className={styles.search}></div>
			<nav className={styles.breadcrumbs}></nav>
			<div className={styles.modHeader}></div>
			<aside className={styles.aside}></aside>
			<ul className={styles.tabs}>
				<Tabs>
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
			<section className={styles.tabContent}></section>
		</div>
	)
}

export default ServerMod
