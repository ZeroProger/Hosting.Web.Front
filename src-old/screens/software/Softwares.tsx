import { softwares } from 'fakeData/curseforge.data'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { Icon } from '@/components/ui/Icon'
import Heading from '@/components/ui/heading/Heading'

import { IParams } from '@/shared/types/base.types'

import { getServerVersionsUrl } from '@/config/url.config'

import styles from './Softwares.module.scss'

interface ISoftwares {}

const Softwares: FC<ISoftwares> = () => {
	const router = useRouter()
	const { slug } = router.query as IParams

	return (
		<div className={styles.container}>
			<Heading title="Ядро сервера" capitalize />
			<div className={styles.groups}>
				{softwares.map((software) => (
					<Link
						href={getServerVersionsUrl(slug, software.slug)}
						key={software.id}
						className={styles.group}
					>
						<div className={styles.image}>
							{software.slug === 'vanila' && <Icon name="FaCubes" size={80} />}
							{software.slug === 'fabric' && <Icon name="Io5SettingsSharp" size={80} />}
							{software.slug === 'forge' && <Icon name="SiCurseforge" size={80} />}
						</div>
						<div className={styles.name}>{software.name}</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Softwares
