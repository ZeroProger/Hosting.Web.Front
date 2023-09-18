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

export interface IPlayerRole {
	id: number
	name: string
	backgroundColor: string
	textColor: string
}

export interface IPlayer {
	id: number
	image: string
	name: string
	roles?: (IPlayerRole | undefined)[]
}
