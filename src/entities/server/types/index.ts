export interface Server {
	gameServerName: string
	gameServerHash: string
	serverIp: string
	serverPorts: ServerPort[]
	gameKind: string
	isOnline: boolean
}

export interface ServerPort {
	id: number
	creationDate: number
	updateDate: number
	portKind: string
	port: number
}
