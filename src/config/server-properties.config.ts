import { IServerProperty, IServerPropertyType } from '@/shared/types/server.types'

export const serverProperties: IServerProperty[] = [
	{
		name: 'max-players',
		value: '20',
		label: 'Кол-во игроков',
		type: IServerPropertyType.Number,
	},
	{
		name: 'gamemode',
		value: 'survival',
		label: 'Режим игры',
		type: IServerPropertyType.Select,
	},
	{
		name: 'difficulty',
		value: 'normal',
		label: 'Сложность',
		type: IServerPropertyType.Select,
	},
	{
		name: 'white-list',
		value: 'false',
		label: 'Белый список',
		type: IServerPropertyType.Boolean,
	},
	{
		name: 'online-mode',
		value: 'false',
		label: 'Пиратский',
		type: IServerPropertyType.Boolean,
	},
	{
		name: 'pvp',
		value: 'true',
		label: 'PvP',
		type: IServerPropertyType.Boolean,
	},
	{
		name: 'enable-command-block',
		value: 'true',
		label: 'Командные блоки',
		type: IServerPropertyType.Boolean,
	},
	{
		name: 'allow-flight',
		value: 'true',
		label: 'Полёт',
		type: IServerPropertyType.Boolean,
	},
	{
		name: 'spawn-animals',
		value: 'true',
		label: 'Животные',
		type: IServerPropertyType.Boolean,
	},
	{
		name: 'spawn-monsters',
		value: 'true',
		label: 'Монстры',
		type: IServerPropertyType.Boolean,
	},
	{
		name: 'spawn-npcs',
		value: 'true',
		label: 'Деревенские жители',
		type: IServerPropertyType.Boolean,
	},
	{
		name: 'allow-nether',
		value: 'true',
		label: 'Адский мир',
		type: IServerPropertyType.Boolean,
	},
	{
		name: 'generate-structures',
		value: 'true',
		label: 'Генерировать структуры',
		type: IServerPropertyType.Boolean,
	},
	{
		name: 'force-gamemode',
		value: 'false',
		label: 'Сбрасывать режим игры',
		type: IServerPropertyType.Boolean,
	},
	{
		name: 'spawn-protect',
		value: '0',
		label: 'Защита спавна',
		type: IServerPropertyType.Number,
	},
	{
		name: 'require-resource-pack',
		value: 'false',
		label: 'Требовать ресурс-пак',
		type: IServerPropertyType.Boolean,
	},
	{
		name: 'view-distance',
		value: '5',
		label: 'Дальность прорисовки',
		type: IServerPropertyType.Number,
	},
	{
		name: 'simulation-distance',
		value: '5',
		label: 'Дальность симуляции',
		type: IServerPropertyType.Number,
	},
	{
		name: 'max-build-height',
		value: '256',
		label: 'Макс. высота строительства',
		type: IServerPropertyType.Number,
	},
	{
		name: 'level-name',
		value: 'world',
		label: 'Название мира',
		type: IServerPropertyType.String,
	},
	{
		name: 'level-seed',
		value: '',
		label: 'Ключ генерации',
		type: IServerPropertyType.String,
	},
	{
		name: 'hardcore',
		value: 'false',
		label: 'Хардкор',
		type: IServerPropertyType.Boolean,
	},
]
