import { IPlayer, IPlayerRole, PlayerRoles } from '@/shared/types/player.types'

import user1 from '@/assets/images/head1.webp'
import user2 from '@/assets/images/head2.png'
import user3 from '@/assets/images/head3.webp'

export const playerRoles = new Map<number, IPlayerRole>([
	[
		PlayerRoles.Operator,
		{ id: 1, name: 'Оператор', backgroundColor: '#3f388a', textColor: '#fff' },
	],
	[
		PlayerRoles.WhiteList,
		{ id: 2, name: 'Белый список', backgroundColor: '#0d6e91', textColor: '#fff' },
	],
])

export const whiteListUsers: IPlayer[] = [
	{ id: 1, image: user1.src, name: 'ZeroProger' },
	{ id: 2, image: user2.src, name: 'kirieshki' },
	{ id: 3, image: user3.src, name: '4epanadjia' },
]

export const operatorsUsers: IPlayer[] = [
	{ id: 1, image: user1.src, name: 'ZeroProger' },
	{ id: 2, image: user2.src, name: 'kirieshki' },
	{ id: 3, image: user3.src, name: '4epanadjia' },
]

export const bannedUsers: IPlayer[] = [
	{ id: 1, image: user1.src, name: 'ZeroProger' },
	{ id: 2, image: user2.src, name: 'kirieshki' },
	{ id: 3, image: user3.src, name: '4epanadjia' },
]

export const bannedIps: { ip: string }[] = [
	{ ip: '192.158.13.73' },
	{ ip: '215.53.75.14' },
	{ ip: '174.102.54.19' },
]

export const serverActivePlayers: IPlayer[] = [
	{
		id: 1,
		image: user1.src,
		name: 'ZeroProger',
		roles: [playerRoles.get(PlayerRoles.Operator), playerRoles.get(PlayerRoles.WhiteList)],
	},
	{
		id: 2,
		image: user2.src,
		name: 'kirieshki',
	},
	{
		id: 3,
		image: user3.src,
		name: '4epanadjia',
		roles: [playerRoles.get(PlayerRoles.WhiteList)],
	},
]
