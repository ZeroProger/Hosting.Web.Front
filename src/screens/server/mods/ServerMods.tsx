import clsx from 'clsx'
import Link from 'next/link'
import { FC, useRef, useState } from 'react'

import ModsCompilation from '@/components/mods-compilation/ModsCompilation'
import { Icon } from '@/components/ui/Icon'
import SearchMods from '@/components/ui/search-mods/SearchMods'

import useOnClickOutside from '@/hooks/useOnClickOutside'

import { getModsSearchUrl } from '@/config/curseforge-api.config'

import styles from './ServerMods.module.scss'
import { useGroupedCategories } from './hooks/useGroupedCategories'
import { usePopularModpacks } from './hooks/usePopularModpacks'
import { usePopularMods } from './hooks/usePopularMods'
import { usePopularPlugins } from './hooks/usePopularPlugins'
import { usePopularResourcePacks } from './hooks/usePopularResourcePacks'
import { usePopularWorlds } from './hooks/usePopularWorlds'

interface IServerMods {}

const ServerMods: FC<IServerMods> = () => {
	const { data: groupedCategories } = useGroupedCategories()
	const mods = usePopularMods()
	const modpacks = usePopularModpacks()
	const resourcePacks = usePopularResourcePacks()
	const worlds = usePopularWorlds()
	const plugins = usePopularPlugins()

	const [classesOpen, setClassesOpen] = useState(false)
	const [classesExpanded, setClassesExpanded] = useState(false)
	const classesRef = useRef(null)

	const handleClassesOpen = () => {
		setClassesOpen((prev) => !prev)
	}

	const handleClickOutside = () => {
		setClassesOpen(false)
	}

	const handleClassesExpand = () => {
		setClassesExpanded(true)
	}

	useOnClickOutside(classesRef, handleClickOutside)

	return (
		<div className={styles.container}>
			<nav className={styles.modNav}>
				<div
					className={clsx(
						styles.classes,
						{ [styles.isOpen]: classesOpen },
						{ [styles.isExpanded]: classesExpanded }
					)}
					ref={classesRef}
				>
					<button className={styles.classesOpen} onClick={handleClassesOpen}>
						Категории
						<Icon name="MdKeyboardArrowDown" size={28} color="#fff" />
					</button>
					<div className={styles.classesMenu}>
						<ul>
							{groupedCategories?.map((group) => (
								<li key={group.className}>
									<div className={styles.group}>
										<ul className={styles.categories}>
											<h3 className={styles.class}>
												<Link href={getModsSearchUrl()}>
													{group.className}
													<Icon name="MdKeyboardArrowRight" size={24} color="#fff" />
												</Link>
											</h3>
											{group.categories.map((category) => (
												<li key={category.id}>
													<Link href={getModsSearchUrl()}>{category.name}</Link>
												</li>
											))}
										</ul>
									</div>
								</li>
							))}
						</ul>
						<button type="button" className={styles.classesExpand} onClick={handleClassesExpand}>
							Посмотреть все
						</button>
					</div>
				</div>
				<div className={styles.divider}></div>
				<div className={styles.search}>
					<SearchMods />
				</div>
			</nav>
			<ModsCompilation title="Популярные моды" link={getModsSearchUrl()} mods={mods.data || []} />
			<ModsCompilation
				title="Популярные модпаки"
				link={getModsSearchUrl()}
				mods={modpacks.data || []}
			/>
			<ModsCompilation title="Популярные миры" link={getModsSearchUrl()} mods={worlds.data || []} />
			<ModsCompilation
				title="Популярные ресурс-паки"
				link={getModsSearchUrl()}
				mods={resourcePacks.data || []}
			/>
			<ModsCompilation
				title="Популярные Bukkit плагины"
				link={getModsSearchUrl()}
				mods={plugins.data || []}
			/>
		</div>
	)
}

export default ServerMods

{
	/* <div className="flex justify-around">
				<Popover placement="bottom-left">
					<Popover.Trigger>
						<Button className="btn-default">Категории</Button>
					</Popover.Trigger>
					<Popover.Content className="w-[1330px] p-4">
						<div className="flex justify-between">
							{classes.map(({ categories, className: title }) => (
								<div key={title}>
									<h1 className="text-2xl">{title}</h1>
									{categories.map(({ name, id }) => (
										<Link key={id} href={getServerModUrl(String(id))}>
											<p>{name}</p>
										</Link>
									))}
								</div>
							))}
						</div>
					</Popover.Content>
				</Popover>
				<div className="flex">
					<Input placeholder="Поиск мода для Minecraft" className="w-[1000px] mr-5" />
					<Button className="btn-error">
						<Icon name="BsSearch" />
					</Button>
				</div>
			</div>
			<div className="flex flex-wrap">
				{mods.map(({ id, name, slug, summary }) => (
					<Link key={id} href={getServerModUrl(String(id))}>
						<Card key={id}>
							<Card.Body>
								<h1>{name}</h1>
								<p>{summary}</p>
							</Card.Body>
						</Card>
					</Link>
				))}
			</div> */
}
