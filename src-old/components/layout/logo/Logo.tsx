import Image from 'next/image'
import Link from 'next/link'
import { FC, Fragment, useEffect, useState } from 'react'

import useMediaQuery from '@/hooks/useMediaQuery'

import logo from '@/assets/images/logo-green.png'

import { minWidthMediaQuery } from '@/config/mediaQuery.config'

import styles from './Logo.module.scss'

interface ILogo {
	showRule?: string
	withText?: boolean
}

const Logo: FC<ILogo> = ({ showRule = minWidthMediaQuery, withText = false }) => {
	const isShow = useMediaQuery(showRule)
	const [isLoad, setIsLoad] = useState<boolean>(false)

	useEffect(() => {
		setIsLoad(true)
	}, [])

	return (
		<Fragment>
			{isLoad && (
				<Link href="/" className="flex flex-row gap-2 items-center">
					<Image
						src={logo.src}
						alt="Simple Host Logo"
						className={styles.image}
						width={isShow ? 50 : 45}
						height={isShow ? 50 : 45}
						priority
					/>
					{withText && isShow && (
						<div className={styles.logoText}>
							<span className="text-primary">Simple</span>
							<span className="text-secondaryDirt">Host</span>
						</div>
					)}
				</Link>
			)}
		</Fragment>
	)
}

export default Logo
