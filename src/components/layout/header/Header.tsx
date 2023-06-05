import { Avatar, Dropdown, Navbar, Text } from '@nextui-org/react'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, Fragment, useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import CustomSelect, { IOption } from '@/components/ui/customSelect/CustomSelect'

import { useAuth } from '@/hooks/auth/useAuth'
import useMediaQuery from '@/hooks/useMediaQuery'

import { ServerService } from '@/services/server.service'

import logo from '@/assets/images/logo-green.png'

import {
	getMinecraftUserServersRequest,
	getServersUrl as getServersApiUrl,
} from '@/config/api/servers-api.config'
import { maxWidthMediaQuery } from '@/config/mediaQuery.config'
import {
	getAuthUrl,
	getPublicServersUrl,
	getServerCreateUrl,
	getServersUrl,
} from '@/config/url.config'

import Logo from '../logo/Logo'
import UserMenu from '../menu/userMenu/UserMenu'

import styles from './Header.module.scss'

interface IHeader {}

const Header: FC<IHeader> = () => {
	const isMobile = useMediaQuery(maxWidthMediaQuery)
	const router = useRouter()
	const isHomePage = router.pathname === '/'
	const [isLoad, setIsLoad] = useState<boolean>(false)
	const [selectOptions, setSelectOptions] = useState<IOption[]>([])
	const [isUserDropdownOpen, setIsUserDropdownOpen] = useState<boolean>(false)
	const { authToken, user } = useAuth()

	const { data: userServers } = useQuery(
		getServersApiUrl(JSON.stringify(getMinecraftUserServersRequest)),
		() => ServerService.compositor.getServers(getMinecraftUserServersRequest),
		{ select: (data) => data.data.servers, enabled: authToken !== null }
	)

	useEffect(() => {
		setIsLoad(true)

		window.addEventListener('scroll', handleCloseMenu)

		return () => {
			window.removeEventListener('scroll', handleCloseMenu)
		}
	}, [])

	useEffect(() => {
		if (userServers && userServers.length > 0) {
			let options: IOption[] = []

			userServers.map((server) => {
				options.push({ label: server.gameServerName, value: server.gameServerHash })
			})

			setSelectOptions(options)
		}
	}, [userServers])

	const handleCloseMenu = () => {
		setIsUserDropdownOpen(false)
	}

	return (
		<Fragment>
			{isLoad ? (
				<Navbar
					variant={'sticky'}
					className={clsx({ [styles.navLandscape]: isHomePage })}
					css={{
						backgroundColor: isHomePage ? 'transparent' : '$gray200',
						$$navbarBackgroundColor: isHomePage ? 'transparent' : '$gray200',
						zIndex: '$max',
						height: 'var(--nextui--navbarHeight)',
						'& .nextui-navbar-container': {
							columnGap: '1.5rem',
							maxWidth: 'var(--container-max-width)',
							'@media screen and (max-width: 1250px)': {
								flexWrap: authToken ? 'wrap' : 'nowrap',
							},
						},
						'@media screen and (max-width: 1250px)': {
							height: authToken ? 'calc(var(--nextui--navbarHeight) * 2)' : 'auto',
							alignItems: 'start',
						},
					}}
					disableBlur
					disableShadow={!isHomePage}
				>
					<Navbar.Brand>
						<Logo withText showRule="(min-width: 700px)" />
					</Navbar.Brand>
					{authToken && (
						<Navbar.Content
							css={{
								w: '100%',
								maxW: '500px',
								'@media screen and (max-width: 1250px)': {
									maxW: '600px',
								},
								'@media screen and (max-width: 900px)': {
									maxW: '500px',
								},
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
								<CustomSelect options={selectOptions || []} />
							</Navbar.Item>
						</Navbar.Content>
					)}
					<Navbar.Content
						css={{
							width: '100%',
							display: 'flex',
							justifyContent: 'space-between',
						}}
						className="md:w-auto"
					>
						<div className="flex flex-row gap-6">
							{authToken && (
								<Navbar.Item className="md:hidden text-xl">
									<Link href={getServersUrl()} className="w-max hover:text-primary">
										Мои сервера
									</Link>
								</Navbar.Item>
							)}
							<Navbar.Item className="md:hidden text-xl">
								<Link href={getPublicServersUrl()} className="w-max hover:text-primary">
									Публичные сервера
								</Link>
							</Navbar.Item>
						</div>
						<div className="flex flex-row gap-6">
							<Navbar.Item className="xs:hidden">
								<Link href={getServerCreateUrl()} className="btn-primary">
									Создать сервер
								</Link>
							</Navbar.Item>
							{user ? (
								<Dropdown
									placement="bottom-right"
									isBordered
									offset={18}
									isOpen={isUserDropdownOpen}
									onOpenChange={() => setIsUserDropdownOpen((prev) => !prev)}
								>
									<Navbar.Item>
										<Dropdown.Trigger>
											<div className="flex flex-row gap-x-3 flex-nowrap items-center cursor-pointer">
												<Avatar
													className={styles.avatar}
													as="button"
													squared
													size="md"
													text={user?.userName}
													textColor="white"
													src={user?.avatarUrl || logo.src}
													css={{
														img: {
															borderColor: '$gray600',
														},
													}}
												/>
												<Text className="text-lg font-semibold" css={{ color: '$gray900' }}>
													{user?.userName}
												</Text>
											</div>
										</Dropdown.Trigger>
									</Navbar.Item>
									<UserMenu />
								</Dropdown>
							) : (
								<Navbar.Item>
									<div className="flex flex-row items-center gap-4">
										<Link href={getAuthUrl()} className="text-xl">
											Вход
										</Link>
										<Link href={getAuthUrl('register')} className="text-xl">
											Регистрация
										</Link>
									</div>
								</Navbar.Item>
							)}
						</div>
					</Navbar.Content>
				</Navbar>
			) : null}
		</Fragment>
	)
}

export default Header
