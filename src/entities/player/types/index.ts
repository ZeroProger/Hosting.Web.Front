export enum PlayersDataListType {
	WhiteList,
	Operators,
	BannedUsers,
	BannedIps,
}

export enum PlayerRoles {
	Operator,
	WhiteList,
}

export interface PlayerRole {
	id: number
	name: string
	backgroundColor: string
	textColor: string
}

export interface Player {
	id: number
	image: string
	name: string
	roles?: (PlayerRole | undefined)[]
}
