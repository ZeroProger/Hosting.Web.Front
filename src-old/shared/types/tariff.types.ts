export interface IGameTariffs {
	gameId: number
	gameName: string
	gameImageUrl: string
	gameDescription: string
	tariffs: ITariff[]
}

export interface ITariff {
	id: number
	gameId: number
	name: string
	description: string
	minSlots: number
	maxSlots: number
	monthPrice: number
	isPricePerPlayer: boolean
	allocatedCpu: number
	allocatedDiskSpace: number
	allocatedMemory: number
	cpuFrequency: number
	cpuName: string
	isCpuPerSlot: boolean
	isMemoryPerSlot: boolean
	locations: ILocation[]
}

export interface ILocation {
	id: number
	name: string
	description: string
	testIp: string
}
