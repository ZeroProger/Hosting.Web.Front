import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/router'
import numeral from 'numeral'
import { FC } from 'react'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import { ICategoryGroup, IMod } from '@/shared/types/curseforge.types'

import siteLogo from '@/assets/images/logo-green.png'

import { russifyUTC } from '@/utils/string/russifyUTC'

import { Icon } from '../ui/Icon'

import styles from './ModCard.module.scss'

interface IModCard {
	mod: IMod
	modClass?: ICategoryGroup
}

export const ModCard: FC<IModCard> = ({ mod, modClass }) => {
	const router = useRouter()
	const modsCart = useTypedSelector((state) => state.mods.cart)
	const { addModToCart, removeModFromCart } = useActions()
	const query = router.query

	const numeralOptions = mod.downloadCount < 1000 ? '' : '0.0a'
	const formattedDownloadsCount = numeral(mod.downloadCount).format(numeralOptions).toUpperCase()

	const handleToggleModInCart = () => {
		if (mod === undefined) return

		if (modsCart.find((cartMod) => cartMod.id === mod.id)) {
			removeModFromCart(mod)
		} else {
			addModToCart(mod)
		}
	}

	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<Image
					src={(mod.logo && mod.logo.thumbnailUrl) || siteLogo.src}
					alt={mod.name}
					width={100}
					height={100}
				/>
			</div>
			<div className={styles.name}>{mod.name}</div>
			<div className={styles.author}>By {mod.authors.at(0)?.name || 'No name'}</div>
			<div
				className={clsx(styles.add, {
					[styles.remove]: modsCart.find((cartMod) => cartMod.id === mod.id),
				})}
			>
				<button
					className={
						modsCart.find((cartMod) => cartMod.id === mod.id) ? styles.removeBtn : styles.addBtn
					}
					onClick={handleToggleModInCart}
				>
					{modsCart.find((cartMod) => cartMod.id === mod.id) ? (
						<Icon name="HiOutlineMinusCircle" size={32} />
					) : (
						<Icon name="HiOutlinePlusCircle" size={32} />
					)}
				</button>
			</div>
			<p className={styles.description}>{mod.summary}</p>
			<ul className={styles.details}>
				<li className={styles.downloads}>
					<Icon name="MdFileDownload" size={24} />
					{formattedDownloadsCount}
				</li>
				<li className={styles.updateDate}>
					<Icon name="RiTimeFill" size={24} />
					{russifyUTC(mod.dateModified)}
				</li>
			</ul>
			<ul className={styles.categories}>
				{modClass && <li className={styles.classTag}>{modClass.className}</li>}
				{mod.categories.map((category) => (
					<li key={category.id} className={styles.categoryTag}>
						{category.name}
					</li>
				))}
			</ul>
		</div>
	)
}

{
	/* <div className={styles.header}>
				<div className={styles.info}>
					<h1>
						{mod.name} | by {mod.authors[0].name}
					</h1>
					<p>{mod.summary}</p>
					<div className={styles.numbers}>
						<div className={styles.number}>
							<Icon name="MdFileDownload" size={24} className={styles.icon} />
							{mod.downloadCount}
						</div>
						<div className={styles.number}>
							<Icon name="MdDateRange" size={24} className={styles.icon} />
							{russifyUTC(mod.dateCreated)}
						</div>
						<div className={styles.number}>
							<Icon name="RiTimeFill" size={24} className={styles.icon} />
							{russifyUTC(mod.dateModified)}
						</div>
					</div>
				</div>
			</div>
			<div className={styles.classification}>
				<Link
					href={getServerModSearchUrl({ ...query, categoryId: undefined, classId: mod.classId })}
				>
					{modClassesMap.get(mod.classId)}
				</Link>
				{mod.categories.map(({ name, id }) => (
					<Link
						key={id}
						href={getServerModSearchUrl({ ...query, categoryId: id })}
						className={styles.category}
					>
						{name}
					</Link>
				))}
			</div> */
}
