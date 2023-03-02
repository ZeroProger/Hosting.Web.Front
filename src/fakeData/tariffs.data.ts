import { ITariff } from './../shared/types/tarif.types'

export const tariffs: ITariff[] = [
	{
		id: 1,
		title: 'Vanila / Plugins',
		slug: 'vanila-plugins',
		pricePerSlot: 15,
		period: 'месяц',
		minSlots: 10,
		options: [
			{ label: 'CPU', value: '0.6 x 5.2 GHz (i9 10900)' },
			{ label: 'RAM', value: '1.5 GB' },
			{ label: 'SSD', value: '10GB NVMe' },
		],
	},
	{
		id: 2,
		title: 'Light Modes',
		slug: 'light-modes',
		pricePerSlot: 22,
		minSlots: 10,
		period: 'месяц',
		options: [
			{ label: 'CPU', value: '1 x 5.2 GHz (i9 10900)' },
			{ label: 'RAM', value: '2.5 GB' },
			{ label: 'SSD', value: '15GB NVMe' },
		],
	},
	{
		id: 3,
		title: 'Hard Modes',
		slug: 'hard-modes',
		pricePerSlot: 32,
		minSlots: 10,
		period: 'месяц',
		options: [
			{ label: 'CPU', value: '1.5 x 5.2 GHz (i9 10900)' },
			{ label: 'RAM', value: '3.5 GB' },
			{ label: 'SSD', value: '20GB NVMe' },
		],
	},
	{
		id: 4,
		title: 'MAX Modes',
		slug: 'max-modes',
		pricePerSlot: 45,
		minSlots: 10,
		period: 'месяц',
		options: [
			{ label: 'CPU', value: '2 x 5.2 GHz (i9 10900)' },
			{ label: 'RAM', value: '4.5 GB' },
			{ label: 'SSD', value: '25GB NVMe' },
		],
	},
]
