export enum PlayersDataListType {
	WhiteList,
	Operators,
	BannedUsers,
	BannedIps,
}

export enum PlayerRoles {
	Operator,
	Whitelist,
}

export interface IPlayerRole {
	id: number
	name: string
	color: string
	textColor: string
}

export interface IPlayer {
	id: number
	image: string
	name: string
	roles?: IPlayerRole[]
}