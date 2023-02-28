import { ICForgeSoftware, ICForgeVersion } from '@/shared/types/curseforge.types'

export const softwares: ICForgeSoftware[] = [
	{
		id: '1',
		name: 'Vanila',
		slug: 'vanila',
	},
	{
		id: '2',
		name: 'Fabric',
		slug: 'fabric',
	},
	{
		id: '3',
		name: 'Forge',
		slug: 'forge',
	},
]

export const vanilaVersions: ICForgeVersion[] = [
	{
		id: 1,
		label: '1.19.3',
		slug: '1.19.3',
	},
	{
		id: 2,
		label: '1.19.2',
		slug: '1.19.2',
	},
	{
		id: 3,
		label: '1.18.2',
		slug: '1.18.2',
	},
	{
		id: 4,
		label: '1.16.5',
		slug: '1.16.5',
	},
	{
		id: 5,
		label: '1.12.2',
		slug: '1.12.2',
	},
]

export const fabricVersions: ICForgeVersion[] = [
	{
		id: 6,
		label: '1.19.3',
		slug: '1.19.3',
		versions: [
			{
				id: 7,
				label: '0.14.17',
				slug: '1.19.3-0.14.17',
				latest: true,
			},
			{
				id: 8,
				label: '0.14.14',
				slug: '1.19.3-0.14.14',
				recommended: true,
			},
		],
	},
	{
		id: 9,
		label: '1.19.2',
		slug: '1.19.2',
		versions: [
			{
				id: 10,
				label: '0.14.17',
				slug: '1.19.2-0.14.17',
				latest: true,
			},
			{
				id: 11,
				label: '0.14.14',
				slug: '1.19.2-0.14.14',
				recommended: true,
			},
		],
	},
	{
		id: 12,
		label: '1.18.2',
		slug: '1.18.2',
		versions: [
			{
				id: 13,
				label: '0.14.17',
				slug: '1.18.2-0.14.17',
				latest: true,
			},
			{
				id: 14,
				label: '0.14.14',
				slug: '1.18.2-0.14.14',
				recommended: true,
			},
		],
	},
	{
		id: 15,
		label: '1.16.5',
		slug: '1.16.5',
		versions: [
			{
				id: 16,
				label: '0.14.17',
				slug: '1.16.5-0.14.17',
				latest: true,
			},
			{
				id: 17,
				label: '0.14.14',
				slug: '1.16.5-0.14.14',
				recommended: true,
			},
		],
	},
	{
		id: 18,
		label: '1.15.2',
		slug: '1.15.2',
		versions: [
			{
				id: 19,
				label: '0.14.17',
				slug: '1.15.2-0.14.17',
				latest: true,
			},
			{
				id: 20,
				label: '0.14.14',
				slug: '1.15.2-0.14.14',
				recommended: true,
			},
		],
	},
]
