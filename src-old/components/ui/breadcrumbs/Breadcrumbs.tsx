import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { useModData } from '@/components/mod-layout/useModData'

import { isNumeric } from '@/utils/numbers/isNumeric'

import { breadcrumbsMap } from '@/config/url.config'

import { Icon } from '../Icon'

import styles from './Breadcrumbs.module.scss'

const convertBreadcrumb = (str: string): string => {
	return str
		.replace(/-/g, ' ')
		.replace(/oe/g, 'ö')
		.replace(/ae/g, 'ä')
		.replace(/ue/g, 'ü')
		.toLowerCase()
}

interface IBreadcrumb {
	breadcrumb: string
	href: string
}

interface IBreadcrumbs {
	lastItem?: string
}

const Breadcrumbs: FC<IBreadcrumbs> = ({ lastItem }) => {
	const router = useRouter()
	const modId = parseInt(String(router.query?.id!))
	const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[]>([])

	const { data: mod, isLoading: modLoading, error: modError } = useModData(modId)

	useEffect(() => {
		if (router) {
			const linkPath = router.asPath.split('/')
			linkPath.shift()

			const pathArray = linkPath.map((path, i) => {
				return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') }
			})

			setBreadcrumbs(pathArray)
		}
	}, [router])

	if (!breadcrumbs) {
		return null
	}

	return (
		<ol className={styles.breadcrumbs}>
			<li className={styles.breadcrumb}>
				<Link href="/">
					Главная
					<Icon name="MdKeyboardArrowRight" size={20} />
				</Link>
			</li>
			{breadcrumbs.map((breadcrumb, i) => {
				const formattedBreadcrumb = convertBreadcrumb(breadcrumb.breadcrumb)
				const mappedBreadcrumb = breadcrumbsMap.get(formattedBreadcrumb)
				const notLast = i < breadcrumbs.length - 1
				const breadcrumbContent = isNumeric(formattedBreadcrumb) ? mod?.name : mappedBreadcrumb

				if (!lastItem) {
					return (
						<li key={breadcrumb.href} className={styles.breadcrumb}>
							{notLast ? (
								<Link href={breadcrumb.href}>
									{breadcrumbContent}
									<Icon name="MdKeyboardArrowRight" size={20} />
								</Link>
							) : (
								<>{breadcrumbContent}</>
							)}
						</li>
					)
				} else {
					if (notLast) {
						return (
							<li key={breadcrumb.href} className={styles.breadcrumb}>
								<Link href={breadcrumb.href}>{mappedBreadcrumb}</Link>
							</li>
						)
					}
				}
			})}
			{lastItem && <li className={clsx(styles.breadcrumb, styles.activeItem)}>{lastItem}</li>}
		</ol>
	)
}

export default Breadcrumbs
