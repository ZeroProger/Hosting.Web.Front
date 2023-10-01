import zod from 'zod'

import { CreateServerFormModType, ECreateServerFormModType } from '../types'

export const minPlayers = 2
export const maxPlayers = 1000

export const formSchema = zod.object({
	playersCount: zod
		.number()
		.min(minPlayers, 'На сервере не может играть меньше 2 человек')
		.max(maxPlayers, 'Извините, мы пока не поддерживаем сервера с онлайном более 1000 человек'),
	mods: zod.number().array(),
})

export const createServerFormModTypes: CreateServerFormModType[] = [
	{
		type: ECreateServerFormModType.WITHOUT_MODS,
		title: 'Без модов',
		description: 'Ванильный сервер без модов',
		exampleMods: [],
	},
	{
		type: ECreateServerFormModType.BASIC_PLUGINS,
		title: 'Базовые плагины',
		description: 'Ограничимся установкой нескольких плагинов для более приятной игры',
		exampleMods: ['WorldGuard', 'Plasmo Voice', 'AuthMe', 'AutoSaveWorld', 'ClearLag'],
	},
	{
		type: ECreateServerFormModType.EASY_MODS,
		title: 'Несколько простых модов',
		description: 'Несколько простых модов',
		exampleMods: ["MrCrayfish's mods", 'Chisel', 'TreeCapitator', 'Forestry'],
	},
	{
		type: ECreateServerFormModType.HARD_MODS,
		title: 'Несколько крупных модов',
		description: 'Несколько крупных модов',
		exampleMods: [
			'Create',
			'Thaumcraft',
			'GalactiCraft',
			'Draconic Evolution',
			'Twilight Forest',
			'Aether II',
			'Botania',
		],
	},
	{
		type: ECreateServerFormModType.WORLD_CHANGE_MODS,
		title: 'Моды изменяющие генерацию',
		description: 'Моды изменяющие генерацию',
		exampleMods: [
			'Biomes O Plenty',
			'AbyssalCraft',
			'Advent of Ascension (Nevermine)',
			'Divine RPG',
			'Biomes You Go',
		],
	},
]
