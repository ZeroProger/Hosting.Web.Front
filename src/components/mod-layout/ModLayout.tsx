import { Modal } from '@nextui-org/react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import numeral from 'numeral'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import Joyride from 'react-joyride'
import { Tab, TabList, Tabs } from 'react-tabs'

import ActiveLink from '@/components/ui/active-link/ActiveLink'
import Breadcrumbs from '@/components/ui/breadcrumbs/Breadcrumbs'
import SearchMods from '@/components/ui/search-mods/SearchMods'

import { useModDescription } from '@/screens/server/mods/description/useModDescription'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import siteLogo from '@/assets/images/logo-green.png'

import { russifyUTC } from '@/utils/string/russifyUTC'

import { modClassesMap } from '@/config/api/curseforge-api.config'
import { error } from '@/config/constants'
import {
	getFeedbackUrl,
	getServerConsoleUrl,
	getServerModFilesUrl,
	getServerModImagesUrl,
	getServerModSearchUrl,
	getServerModUrl,
} from '@/config/url.config'

import { Icon } from '../ui/Icon'

import styles from './ModLayout.module.scss'
import ModLayoutLoading from './ModLayoutLoading'
import { useModData } from './useModData'

enum ModLayoutPathIndexes {
	Description,
	Files,
	Images,
	Relations,
}

const ModLayout: FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter()
	const { server } = useTypedSelector((state) => state.server)
	const { addModToCart, removeModFromCart } = useActions()
	const modsCart = useTypedSelector((state) => state.mods.cart)
	const modIdString = String(router.query?.id!)
	const modId = parseInt(modIdString)
	const [tabIndex, setTabIndex] = useState(0)
	const { data: mod, isLoading: modLoading, error: modError } = useModData(modId)
	const isModInCart = modsCart.find((cartMod) => cartMod.id === mod?.id)
	const {
		data: description,
		isLoading: descriptionLoading,
		error: descriptionError,
	} = useModDescription(modId)

	var pathsMap = new Map([
		[getServerModUrl(modIdString), ModLayoutPathIndexes.Description],
		[getServerModFilesUrl(modIdString), ModLayoutPathIndexes.Files],
		[getServerModImagesUrl(modIdString), ModLayoutPathIndexes.Images],
	])

	//const dataLoading = true
	const dataLoading = modLoading || descriptionLoading

	const numeralOptions = mod?.downloadCount! < 1000 ? '' : '0.0a'
	const formattedDownloadsCount = numeral(mod?.downloadCount!).format(numeralOptions).toUpperCase()

	const formattedDateCreated = russifyUTC(mod?.dateCreated!)
	const formattedDateModified = russifyUTC(mod?.dateModified!)

	const handleToggleModInCart = () => {
		if (mod === undefined) return

		if (modsCart.find((cartMod) => cartMod.id === mod.id)) {
			removeModFromCart(mod)
		} else {
			addModToCart(mod)
		}
	}

	useEffect(() => {
		setTabIndex(pathsMap.get(router.asPath)!)
	}, [router.asPath])

	if (modError || descriptionError) return <div className={styles.error}>Ошибка!</div>

	return (
		<>
			<Joyride
				run
				hideCloseButton
				hideBackButton
				continuous
				scrollOffset={200}
				callback={({ step, status }) => {
					if (step.content === '11')
						(document.querySelector('#add-mod-btn-step') as HTMLButtonElement)?.click()
					else if (step.content === '13')
						(document.querySelector('#mods-cart-step') as HTMLButtonElement)?.click()
					else if (step.content === '14')
						(document.querySelector('.nextui-modal-close-icon') as HTMLButtonElement)?.click()
					if (status === 'finished') {
						;(document.querySelector('#remove-mod-btn-step') as HTMLButtonElement)?.click()
						router.push(getServerConsoleUrl(server?.gameServerHash!))
					}
				}}
				steps={[
					{
						content: '10',
						target: '#add-mod-btn-step',
						disableBeacon: true,
						placement: 'auto',
						locale: {
							next: <strong>Дальше</strong>,
							back: <strong>Назад</strong>,
						},
					},
					{
						content: '11',
						target: `.${styles.favoriteBtn}`,
						disableBeacon: true,
						placement: 'auto',
						locale: {
							next: <strong>Дальше</strong>,
							back: <strong>Назад</strong>,
						},
					},
					{
						content: '12',
						target: '#mods-cart-step',
						disableBeacon: true,
						placement: 'auto',
						locale: {
							next: <strong>Дальше</strong>,
							back: <strong>Назад</strong>,
						},
					},
					{
						content: '13',
						target: 'body',
						disableBeacon: true,
						locale: {
							next: <strong>Дальше</strong>,
							back: <strong>Назад</strong>,
						},
						styles: {
							options: {
								zIndex: 100000,
							},
						},
						offset: 0,
					},
					{
						content: '14',
						target: '#remove-mod-btn-step',
						disableBeacon: true,
						placement: 'auto',
						locale: {
							last: <strong>Дальше</strong>,
							back: <strong>Назад</strong>,
						},
					},
				]}
			/>
			<div className={styles.container}>
				{dataLoading ? (
					<ModLayoutLoading />
				) : (
					<>
						{mod && (
							<>
								<div className={styles.search}>
									<SearchMods />
								</div>
								<nav className={styles.breadcrumbs}>
									<Breadcrumbs />
								</nav>
								<div className={styles.modHeader}>
									<div className={clsx(styles.modImage, { [styles.siteLogo]: mod.logo === null })}>
										<Image
											src={(mod.logo && mod.logo.url) || siteLogo.src}
											alt={`Логотип мода ${mod.name}`}
											width={80}
											height={80}
										/>
									</div>
									<h1 className={styles.modName}>{mod.name}</h1>
									<ul className={styles.modDetails}>
										<li className={styles.detailsAuthor}>
											От <Link href={mod.authors.at(0)?.url!}>{mod.authors.at(0)?.name}</Link>
										</li>
										<li className={styles.classTag}>
											<Link href={getServerModSearchUrl({ classId: mod.classId })}>
												{modClassesMap.get(mod.classId)}
											</Link>
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
										<button
											type="button"
											className={isModInCart ? styles.removeModBtn : styles.addModBtn}
											id={`${isModInCart ? 'remove' : 'add'}-mod-btn-step`}
											onClick={handleToggleModInCart}
										>
											{isModInCart ? (
												<>
													<Icon name="HiOutlineMinusCircle" size={32} />
													Убрать
												</>
											) : (
												<>
													<Icon name="HiOutlinePlusCircle" size={32} />
													Добавить
												</>
											)}
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
													<Link
														href={getServerModSearchUrl({
															categoryId: category.id,
															classId: category.classId,
														})}
													>
														{category.name}
													</Link>
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
												<ActiveLink
													href={getServerModFilesUrl(modIdString)}
													activeClassName="active"
												>
													Файлы
												</ActiveLink>
											</Tab>
											<Tab>
												<ActiveLink
													href={getServerModImagesUrl(modIdString)}
													activeClassName="active"
												>
													Изображения
												</ActiveLink>
											</Tab>
										</TabList>
									</Tabs>
								</ul>
								<section className={styles.tabContent}>{children}</section>
							</>
						)}
					</>
				)}
			</div>
		</>
	)
}

export default ModLayout
