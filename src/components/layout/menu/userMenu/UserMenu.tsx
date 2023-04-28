import { Dropdown } from '@nextui-org/react'
import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

import { getLogoutUrl, getPublicServersUrl, getServersUrl } from '@/config/url.config'

import { userMenu } from '../menu.data'

const UserMenu: FC = () => {
	return (
		<Dropdown.Menu
			aria-label="User menu actions"
			onAction={(actionKey) => console.log({ actionKey })}
			style={{
				backgroundColor: '#fff',
			}}
		>
			{userMenu.items.map((item) => (
				<Dropdown.Item
					key={item.link}
					withDivider={item.addDivider}
					css={{ flexDirection: 'column', alignItems: 'stretch' }}
					className={clsx({
						'md-min:hidden': item.link === getServersUrl() || item.link === getPublicServersUrl(),
					})}
					color={item.link === getLogoutUrl() ? 'error' : undefined}
				>
					<Link href={item.link} className="flex items-center h-full">
						{item.title}
					</Link>
				</Dropdown.Item>
			))}
		</Dropdown.Menu>
	)
}

export default UserMenu
