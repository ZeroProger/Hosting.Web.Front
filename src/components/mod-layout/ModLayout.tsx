import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import numeral from 'numeral'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { Tab, TabList, Tabs } from 'react-tabs'

import ActiveLink from '@/components/ui/active-link/ActiveLink'
import Breadcrumbs from '@/components/ui/breadcrumbs/Breadcrumbs'
import SearchMods from '@/components/ui/search-mods/SearchMods'

import { useModDescription } from '@/screens/server/mods/description/useModDescription'

import { error } from '@/config/constants'
import { modClassesMap } from '@/config/curseforge-api.config'
import {
	getFeedbackUrl,
	getServerModFilesUrl,
	getServerModImagesUrl,
	getServerModRelationsUrl,
	getServerModSearchUrl,
	getServerModUrl,
} from '@/config/url.config'

import { Icon } from '../ui/Icon'

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
	const { data: mod, isLoading: modLoading, error: modError } = useModData(modId)
	const {
		data: description,
		isLoading: descriptionLoading,
		error: descriptionError,
	} = useModDescription(modId)

	var pathsMap = new Map([
		[getServerModUrl(modIdString), ModLayoutPathIndexes.Description],
		[getServerModFilesUrl(modIdString), ModLayoutPathIndexes.Files],
		[getServerModImagesUrl(modIdString), ModLayoutPathIndexes.Images],
		[getServerModRelationsUrl(modIdString), ModLayoutPathIndexes.Relations],
	])

	const numeralOptions = mod?.downloadCount! < 1000 ? '' : '0.0a'
	const formattedDownloadsCount = numeral(mod?.downloadCount!).format(numeralOptions).toUpperCase()
	const dateOptions: Intl.DateTimeFormatOptions = {
		month: 'short',
		year: 'numeric',
		day: 'numeric',
	}
	const formattedDateCreated = new Date(String(mod?.dateCreated)).toLocaleString(
		'ru-RU',
		dateOptions
	)
	const formattedDateModified = new Date(String(mod?.dateModified)).toLocaleString(
		'ru-RU',
		dateOptions
	)

	useEffect(() => {
		setTabIndex(pathsMap.get(router.asPath)!)
	}, [router.asPath])

	//#TODO: Заменить
	if (modLoading || descriptionLoading) return <div className={styles.loading}>Загрузка...</div>
	if (modError || descriptionError) return <div className={styles.error}>Ошибка!</div>

	return (
		<div className={styles.container}>
			<div className={styles.search}>
				<SearchMods />
			</div>
			<nav className={styles.breadcrumbs}>
				<Breadcrumbs />
			</nav>
			{mod && (
				<>
					<div className={styles.modHeader}>
						<div className={styles.modImage}>
							<Image src={mod.logo.url} alt={`Логотип мода ${mod.name}`} width={80} height={80} />
						</div>
						<h1 className={styles.modName}>{mod.name}</h1>
						<ul className={styles.modDetails}>
							<li className={styles.detailsAuthor}>
								От <Link href={mod.authors.at(0)?.url!}>{mod.authors.at(0)?.name}</Link>
							</li>
							<li className={styles.classTag}>
								<Link href={getServerModSearchUrl()}>{modClassesMap.get(mod.classId)}</Link>
							</li>
							<li className={styles.detailsDownloads}>
								<Icon name="MdFileDownload" size={24} />
								{formattedDownloadsCount}
							</li>
						</ul>
						<div className={styles.modActions}>
							<button type="button" className={styles.favoriteBtn}>
								<Icon name="FaRegHeart" size={24} />
							</button>
							<button type="button" className={styles.addModBtn}>
								<Icon name="HiOutlinePlusCircle" size={32} />
								Добавить
							</button>
						</div>
					</div>
					<aside className={styles.aside}>
						<div className={styles.about}>
							<h3>Основная информация</h3>
							<div className={styles.aboutItems}>
								<div className={styles.aboutItem}>
									<div className={styles.aboutLabel}>Создан:</div>
									<div className={styles.aboutValue}>{formattedDateCreated}</div>
								</div>
								<div className={styles.aboutItem}>
									<div className={styles.aboutLabel}>Обновлен:</div>
									<div className={styles.aboutValue}>{formattedDateModified}</div>
								</div>
								<div className={styles.aboutItem}>
									<div className={styles.aboutLabel}>ID проекта:</div>
									<div className={styles.aboutValue}>{mod.id}</div>
								</div>
							</div>
						</div>
						<div className={styles.categories}>
							<h3>Категории</h3>
							<ul className={styles.categoriesLinks}>
								{mod.categories.map((category) => (
									<li key={category.id}>
										<Link href={getServerModSearchUrl()}>{category.name}</Link>
									</li>
								))}
							</ul>
						</div>
						<div className={styles.authors}>
							<h3>Авторы</h3>
							<ul className={styles.authorsLinks}>
								{mod.authors.map((author) => (
									<li key={author.id}>
										<Link href={author.url} target={'_blank'}>
											{author.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className={styles.report}>
							<h3>Сообщить об ошибке</h3>
							<Link href={getFeedbackUrl()} className={styles.reportLink}>
								<Icon name="MdOutlineReport" color={error} size={28}></Icon>
								Сообщить
							</Link>
						</div>
					</aside>
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
							</TabList>
						</Tabs>
					</ul>
					<section className={styles.tabContent}>{children}</section>
				</>
			)}
		</div>
	)
}

export default ModLayout
