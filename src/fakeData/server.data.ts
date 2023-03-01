import { IServerProperty, ServerPropertyType } from '@/shared/types/server.types'

import image1 from '@/assets/images/head1.webp'
import image2 from '@/assets/images/head2.png'
import image3 from '@/assets/images/head3.webp'
import image4 from '@/assets/images/head4.webp'

import { IServerMainInfo } from './../shared/types/server.types'

export const serverMainInfo: IServerMainInfo[] = [
	{
		label: 'Статус',
		value: 'Онлайн',
		otherInfo: {
			isOnline: true,
		},
	},
	{
		label: 'Игроки',
		value: '4/8',
		otherInfo: {
			playersImages: [image1.src, image2.src, image3.src, image4.src],
		},
	},
	{
		label: 'IP',
		value: 'arcade-sky.simplehost',
		otherInfo: {
			copyable: true,
		},
	},
	{
		label: 'Дин. IP',
		value: 'dynY6ZHOK.simplehost.cloud:10305',
		otherInfo: {
			copyable: true,
		},
	},
	{
		label: 'Ядро',
		value: 'Fabric',
		otherInfo: {
			isSoftware: true,
		},
	},
	{
		label: 'Версия',
		value: '1.19.2',
		otherInfo: {
			isVersion: true,
		},
	},
]

export const serverProperties: IServerProperty[] = [
	{
		name: 'max-players',
		value: '20',
		label: 'Кол-во игроков',
		type: ServerPropertyType.Number,
	},
	{
		name: 'gamemode',
		value: 'survival',
		label: 'Режим игры',
		select: {
			options: [
				{ label: 'Выживание', value: 'survival' },
				{ label: 'Творческий', value: 'creative' },
				{ label: 'Приключение', value: 'adventure' },
				{ label: 'Наблюдатель', value: 'spectator' },
			],
		},
		type: ServerPropertyType.Select,
	},
	{
		name: 'difficulty',
		value: 'normal',
		label: 'Сложность',
		select: {
			options: [
				{ label: 'Мирная', value: 'peaceful' },
				{ label: 'Легкая', value: 'easy' },
				{ label: 'Нормальная', value: 'normal' },
				{ label: 'Тяжелая', value: 'hard' },
			],
		},
		type: ServerPropertyType.Select,
	},
	{
		name: 'white-list',
		value: 'false',
		label: 'Белый список',
		type: ServerPropertyType.Boolean,
	},
	{
		name: 'online-mode',
		value: 'false',
		label: 'Пиратский',
		type: ServerPropertyType.Boolean,
	},
	{
		name: 'pvp',
		value: 'true',
		label: 'PvP',
		type: ServerPropertyType.Boolean,
	},
	{
		name: 'enable-command-block',
		value: 'true',
		label: 'Командные блоки',
		type: ServerPropertyType.Boolean,
	},
	{
		name: 'allow-flight',
		value: 'true',
		label: 'Полёт',
		type: ServerPropertyType.Boolean,
	},
	{
		name: 'spawn-animals',
		value: 'true',
		label: 'Животные',
		type: ServerPropertyType.Boolean,
	},
	{
		name: 'spawn-monsters',
		value: 'true',
		label: 'Монстры',
		type: ServerPropertyType.Boolean,
	},
	{
		name: 'spawn-npcs',
		value: 'true',
		label: 'Деревенские жители',
		type: ServerPropertyType.Boolean,
	},
	{
		name: 'allow-nether',
		value: 'true',
		label: 'Адский мир',
		type: ServerPropertyType.Boolean,
	},
	{
		name: 'generate-structures',
		value: 'true',
		label: 'Генерировать структуры',
		type: ServerPropertyType.Boolean,
	},
	{
		name: 'force-gamemode',
		value: 'false',
		label: 'Сбрасывать режим игры',
		type: ServerPropertyType.Boolean,
	},
	{
		name: 'spawn-protect',
		value: '0',
		label: 'Защита спавна',
		type: ServerPropertyType.Number,
	},
	{
		name: 'require-resource-pack',
		value: 'false',
		label: 'Требовать ресурс-пак',
		type: ServerPropertyType.Boolean,
	},
	{
		name: 'view-distance',
		value: '5',
		label: 'Дальность прорисовки',
		type: ServerPropertyType.Number,
	},
	{
		name: 'simulation-distance',
		value: '5',
		label: 'Дальность симуляции',
		type: ServerPropertyType.Number,
	},
	{
		name: 'max-build-height',
		value: '256',
		label: 'Макс. высота строительства',
		type: ServerPropertyType.Number,
	},
	{
		name: 'level-name',
		value: 'world',
		label: 'Название мира',
		type: ServerPropertyType.String,
	},
	{
		name: 'level-seed',
		value: '',
		label: 'Ключ генерации',
		type: ServerPropertyType.String,
	},
	{
		name: 'hardcore',
		value: 'false',
		label: 'Хардкор',
		type: ServerPropertyType.Boolean,
	},
]
