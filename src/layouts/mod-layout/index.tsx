'use client'

import clsx from 'clsx'
import { useStore } from 'effector-react'
import { AlertTriangle, ArrowDownToLine, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CallBackProps } from 'react-joyride'

import siteLogo from '@/app/assets/images/logo-green.png'

import { SearchMods } from '@/features/search-mods'

import { modClassesMap } from '@/shared/config/mods'
import { JoyrideGuide, modLayoutSteps } from '@/shared/lib/react-joyride'
import { CommonUrls, ModUrls, ServerUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'

import { useModLayout } from './hooks'
import { ModLayoutLoading } from './loading'
import { ModLayoutTabs } from './mod-layout-tabs'
import styles from './styles.module.scss'

export function ModLayout({ children, modId }: { children: React.ReactNode; modId: number }) {
	const router = useRouter()

	const serverHash = useStore($serverHash)

	const { mod, isLoading, formattedDateCreated, formattedDateModified, formattedDownloadsCount } =
		useModLayout(modId)

	const joyrideCallback = (callback: CallBackProps) => {
		if (callback.action === 'next' && callback.step.target === '#add-mod-btn-step')
			(document.querySelector('#add-mod-btn-step') as HTMLButtonElement)?.click()
		else if (callback.action === 'next' && callback.step.target === '#remove-mod-btn-step')
			(document.querySelector('.nextui-modal-close-icon') as HTMLButtonElement)?.click()
		if (callback.status === 'finished' && callback.step.target === '#remove-mod-btn-step') {
			;(document.querySelector('#remove-mod-btn-step') as HTMLButtonElement)?.click()
			router.push(ServerUrls.server.console(serverHash!))
		}
	}

	if (isLoading) return <ModLayoutLoading />

	return (
		<>
			<JoyrideGuide steps={modLayoutSteps} callback={joyrideCallback} />
			<div className={styles.container}>
				{mod && (
					<>
						<div className={styles.search}>
							<SearchMods />
						</div>
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
									От{' '}
									<Link href={mod.authors.at(0)?.url!} target="_blank">
										{mod.authors.at(0)?.name}
									</Link>
								</li>
								<li className={styles.classTag}>
									<Link href={ModUrls.search(serverHash!, { classId: mod.classId })}>
										{modClassesMap.get(mod.classId)}
									</Link>
								</li>
								<li className={styles.detailsDownloads}>
									<ArrowDownToLine size={24} />
									{formattedDownloadsCount}
								</li>
							</ul>
							<div className={styles.modActions}>
								<button type="button" className={styles.favoriteBtn} id="add-to-favorites-btn-step">
									<Heart size={24} />
								</button>
								{/* <button
											type="button"
											className={isModInCart ? styles.removeModBtn : styles.addModBtn}
											id={`${isModInCart ? 'remove' : 'add'}-mod-btn-step`}
											onClick={handleToggleModInCart}
										>
											{isModInCart ? (
												<>
													<Icon name="minus-circle" size={32} />
													Убрать
												</>
											) : (
												<>
													<Icon name="plus-circle" size={32} />
													Добавить
												</>
											)}
										</button> */}
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
												href={ModUrls.search(serverHash!, {
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
								<Link href={CommonUrls.feedback()} className={styles.reportLink}>
									<AlertTriangle strokeWidth={2} className="text-destructive" size={28} />
									Сообщить
								</Link>
							</div>
						</aside>
						<ModLayoutTabs modId={mod.id} />
						<section className={styles.tabContent}>{children}</section>
					</>
				)}
			</div>
		</>
	)
}
