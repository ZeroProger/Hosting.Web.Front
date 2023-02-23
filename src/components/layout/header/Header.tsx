import logo from '/public/favicon.png'
import { Avatar, Dropdown, Navbar, Text } from '@nextui-org/react'
import { FC, Fragment, useEffect, useState } from 'react'

import useMediaQuery from '@/hooks/useMediaQuery'

import { maxWidthMediaQuery } from '@/config/mediaQuery.config'

import Logo from '../logo/Logo'
import UserMenu from '../menu/userMenu/UserMenu'

import styles from './Header.module.scss'

interface IHeader {}

const Header: FC<IHeader> = () => {
	const isMobile = useMediaQuery(maxWidthMediaQuery)
	const [isLoad, setIsLoad] = useState<boolean>(false)

	useEffect(() => {
		setIsLoad(true)
	}, [])

	return (
		<Fragment>
			{isLoad ? (
				<Navbar
					variant={'sticky'}
					css={{
						backgroundColor: '$gray200',
						$$navbarBackgroundColor: '$gray200',
						zIndex: 2,
						height: '70px',
					}}
					disableBlur
					disableShadow
				>
					<Navbar.Brand>
						<Logo withText />
					</Navbar.Brand>
					<Navbar.Content
						css={{
							w: '100%',
							justifyContent: 'end',
						}}
					>
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
