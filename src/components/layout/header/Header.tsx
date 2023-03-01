import logo from '/public/favicon.png'
import { Avatar, Dropdown, Navbar, Text } from '@nextui-org/react'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, Fragment, useEffect, useState } from 'react'

import CustomSelect from '@/components/ui/customSelect/CustomSelect'

import useMediaQuery from '@/hooks/useMediaQuery'

import { maxWidthMediaQuery } from '@/config/mediaQuery.config'
import { getServerCreateUrl } from '@/config/url.config'

import Logo from '../logo/Logo'
import UserMenu from '../menu/userMenu/UserMenu'

import styles from './Header.module.scss'

interface IHeader {}

const Header: FC<IHeader> = () => {
	const isMobile = useMediaQuery(maxWidthMediaQuery)
	const router = useRouter()
	const isHomePage = router.pathname === '/'
	const [isLoad, setIsLoad] = useState<boolean>(false)

	const options = [
		{ value: 'sky-block', label: 'Sky Block' },
		{ value: 'classic-vanila', label: 'Classic Vanila' },
		{ value: 'industrial-craft', label: 'Industrial Craft' },
	]

	useEffect(() => {
		setIsLoad(true)
	}, [])

	return (
		<Fragment>
			{isLoad ? (
				<Navbar
					variant={'sticky'}
					className={clsx({ [styles.navLandscape]: isHomePage })}
					css={{
						backgroundColor: isHomePage ? 'transparent' : '$gray200',
						$$navbarBackgroundColor: isHomePage ? 'transparent' : '$gray200',
						zIndex: 2,
						height: 'var(--nextui--navbarHeight)',
						'& .nextui-navbar-container': {
							columnGap: '1.5rem',
							maxWidth: 'var(--container-max-width)',
							'@media screen and (max-width: 900px)': {
								flexWrap: 'wrap',
							},
						},
						'@media screen and (max-width: 900px)': {
							height: 'calc(var(--nextui--navbarHeight) * 2)',
							alignItems: 'start',
						},
					}}
					disableBlur
					disableShadow
				>
					<Navbar.Brand>
						<Logo withText showRule="(min-width: 600px)" />
					</Navbar.Brand>
					<Navbar.Content
						css={{
							w: '100%',
							maxW: '500px',
						}}
						className="md:order-5 md:max-w-full"
					>
						<Navbar.Item
							css={{
								width: '100%',
								'& :first-child': {
									boxSizing: 'border-box',
								},
							}}
						>
							<CustomSelect options={options}></CustomSelect>
						</Navbar.Item>
					</Navbar.Content>
					<Navbar.Content
						css={{
							width: '100%',
							display: 'flex',
							justifyContent: 'space-between',
						}}
						className="md:w-auto"
					>
						<Navbar.Item className="xs:hidden">
							<Link href={getServerCreateUrl()} className="btn-primary">
								Создать сервер
							</Link>
						</Navbar.Item>
						<Dropdown placement="bottom-right" isBordered>
							<Navbar.Item>
								<Dropdown.Trigger>
									<div className="flex flex-row gap-x-3 flex-nowrap items-center cursor-pointer">
										<Avatar
											className={styles.avatar}
											as="button"
											squared
											size="md"
											text="ZeroProger"
											textColor="white"
											src={logo.src}
											css={{
												img: {
													borderColor: '$gray600',
												},
											}}
										/>
										<Text className="text-lg font-semibold" css={{ color: '$gray900' }}>
											ZeroProger
										</Text>
									</div>
								</Dropdown.Trigger>
							</Navbar.Item>
							<UserMenu />
						</Dropdown>
					</Navbar.Content>
				</Navbar>
			) : null}
		</Fragment>
	)
}

export default Header
