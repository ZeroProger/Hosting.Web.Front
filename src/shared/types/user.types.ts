export enum PlayersDataListType {
	WhiteList,
	Operators,
	BannedUsers,
	BannedIps,
}

export interface IUser {
	id: number
	image: string
	name: string
}
