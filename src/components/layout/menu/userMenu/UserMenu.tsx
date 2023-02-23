import { Dropdown } from '@nextui-org/react'
import Link from 'next/link'
import { FC } from 'react'

import { userMenu } from '../menu.data'

const UserMenu: FC = () => {
	return (
		<Dropdown.Menu
			aria-label="User menu actions"
			onAction={(actionKey) => console.log({ actionKey })}
		>
			{userMenu.items.map((item) => (
				<Dropdown.Item
					key={item.link}
					withDivider={item.addDivider}
					css={{ flexDirection: 'column', alignItems: 'stretch' }}
					color={item.link === '/logout' ? 'error' : undefined}
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
