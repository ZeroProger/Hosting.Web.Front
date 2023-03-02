export interface ITariff {
	id: number
	title: string
	slug: string
	pricePerSlot: number
	period: string
	minSlots: number
	options: ITariffOption[]
	otherInfo?: string[]
}

export interface ITariffOption {
	label: string
	value: string
}
