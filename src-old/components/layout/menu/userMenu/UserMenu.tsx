import { Dropdown } from '@nextui-org/react'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import { ILogoutRequest } from '@/shared/types/requests/auth-requests.types'

import { getLogoutUrl, getPublicServersUrl, getServersUrl } from '@/config/url.config'

import { userMenu } from '../menu.data'

const UserMenu: FC = () => {
	const { push } = useRouter()
	const { logout } = useActions()
	const { authToken } = useTypedSelector((state) => state.user)
	const logoutRequest: ILogoutRequest = { authToken: authToken || '' }

	const handleLogout = () => {
		logout(logoutRequest)
		push('/')
	}

	return (
		<Dropdown.Menu aria-label="User menu actions">
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
					{item.link === getLogoutUrl() ? (
						<button className="flex items-center h-full w-full" onClick={handleLogout}>
							{item.title}
						</button>
					) : (
						<Link href={item.link} className="flex items-center h-full w-full">
							{item.title}
						</Link>
					)}
				</Dropdown.Item>
			))}
		</Dropdown.Menu>
	)
}

export default UserMenu
