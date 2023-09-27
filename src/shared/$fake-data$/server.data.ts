import { default as image1 } from '@/app/assets/images/head1.webp'
import { default as image2 } from '@/app/assets/images/head2.png'
import { default as image3 } from '@/app/assets/images/head3.webp'
import image4 from '@/app/assets/images/head4.webp'

import {
	IFileNode,
	IServer,
	IServerConsoleLine,
	IServerConsoleLineType,
	IServerCurrentUsageItem,
	IServerMainInfo,
	IServerProperty,
	ServerPropertyType,
} from '@/shared/types'

export const servers: IServer[] = [
	{
		gameServerName: 'First test Server',
		gameServerHash: 'e49e80aff7d038738181e79ad66a0dbbd3eb678b447c98fbac6cbfea1ece452e',
		gameKind: 'minecraft',
		serverIp: '194.74.25.12',
		isOnline: true,
		serverPorts: [
			{ id: 1, port: 10004, portKind: 'controller', creationDate: 100, updateDate: 100 },
		],
	},
	{
		gameServerName: 'Second test Server',
		gameServerHash: 'fd5c41aff7d038738181e79ad66a0dbbd3eb678b447c98fbac6cbfea1efd5c41',
		gameKind: 'minecraft',
		serverIp: '221.91.32.16',
		isOnline: false,

		serverPorts: [
			{ id: 1, port: 10006, portKind: 'controller', creationDate: 100, updateDate: 100 },
		],
	},
]

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

export const serverConsole: IServerConsoleLine[] = [
	{
		id: '1',
		message: 'Starting Minecraft server on *:62725',
		type: IServerConsoleLineType.Info,
		time: '20:24:20',
	},
	{
		id: '2',
		message: 'Preparing level world',
		type: IServerConsoleLineType.Info,
		time: '20:24:21',
	},
	{
		id: '3',
		message:
			'**** SERVER IS RUNNING IN OFFLINE/INSECURE MODE! **** SERVER IS RUNNING IN OFFLINE/INSECURE MODE! **** SERVER IS RUNNING IN OFFLINE/INSECURE MODE! **** SERVER IS RUNNING IN OFFLINE/INSECURE MODE!',
		type: IServerConsoleLineType.Warning,
		time: '20:24:22',
	},
	{
		id: '4',
		message: '4epenaDJIa has made the advancement [Monster Hunter]',
		type: IServerConsoleLineType.Info,
		time: '20:24:23',
	},
	{
		id: '5',
		message: `Can't keep up! Is the server overloaded? Running 2003ms or 40 ticks behind`,
		type: IServerConsoleLineType.Warning,
		time: '20:24:24',
	},
	{
		id: '6',
		message: `Unexpected error. Server crashed!`,
		type: IServerConsoleLineType.Error,
		time: '20:24:25',
	},
	{
		id: '7',
		message: `Using 4 threads for Netty based IO. Server stopped.`,
		type: IServerConsoleLineType.Error,
		time: '20:24:26',
	},
	{
		id: '8',
		message: 'Saving players.',
		type: IServerConsoleLineType.Info,
		time: '20:24:27',
	},
	{
		id: '9',
		message: 'Saving level world.',
		type: IServerConsoleLineType.Info,
		time: '20:24:28',
	},
	{
		id: '10',
		message: 'Thread Query Listener stopped',
		type: IServerConsoleLineType.Info,
		time: '20:24:29',
	},
	{
		id: '11',
		message: 'Starting Minecraft server on *:62725',
		type: IServerConsoleLineType.Info,
		time: '20:24:20',
	},
	{
		id: '12',
		message: 'Preparing level world',
		type: IServerConsoleLineType.Info,
		time: '20:24:21',
	},
	{
		id: '13',
		message:
			'**** SERVER IS RUNNING IN OFFLINE/INSECURE MODE! **** SERVER IS RUNNING IN OFFLINE/INSECURE MODE! **** SERVER IS RUNNING IN OFFLINE/INSECURE MODE! **** SERVER IS RUNNING IN OFFLINE/INSECURE MODE!',
		type: IServerConsoleLineType.Warning,
		time: '20:24:22',
	},
	{
		id: '14',
		message: '4epenaDJIa has made the advancement [Monster Hunter]',
		type: IServerConsoleLineType.Info,
		time: '20:24:23',
	},
	{
		id: '15',
		message: `Can't keep up! Is the server overloaded? Running 2003ms or 40 ticks behind`,
		type: IServerConsoleLineType.Warning,
		time: '20:24:24',
	},
	{
		id: '16',
		message: `Unexpected error. Server crashed!`,
		type: IServerConsoleLineType.Error,
		time: '20:24:25',
	},
	{
		id: '17',
		message: `Using 4 threads for Netty based IO. Server stopped.`,
		type: IServerConsoleLineType.Error,
		time: '20:24:26',
	},
	{
		id: '18',
		message: 'Saving players.',
		type: IServerConsoleLineType.Info,
		time: '20:24:27',
	},
	{
		id: '19',
		message: 'Saving level world.',
		type: IServerConsoleLineType.Info,
		time: '20:24:28',
	},
	{
		id: '20',
		message: 'Thread Query Listener stopped',
		type: IServerConsoleLineType.Info,
		time: '20:24:29',
	},
	{
		id: '21',
		message: 'Starting Minecraft server on *:62725',
		type: IServerConsoleLineType.Info,
		time: '20:24:20',
	},
	{
		id: '22',
		message: 'Preparing level world',
		type: IServerConsoleLineType.Info,
		time: '20:24:21',
	},
	{
		id: '23',
		message:
			'**** SERVER IS RUNNING IN OFFLINE/INSECURE MODE! **** SERVER IS RUNNING IN OFFLINE/INSECURE MODE! **** SERVER IS RUNNING IN OFFLINE/INSECURE MODE! **** SERVER IS RUNNING IN OFFLINE/INSECURE MODE!',
		type: IServerConsoleLineType.Warning,
		time: '20:24:22',
	},
	{
		id: '24',
		message: '4epenaDJIa has made the advancement [Monster Hunter]',
		type: IServerConsoleLineType.Info,
		time: '20:24:23',
	},
	{
		id: '25',
		message: `Can't keep up! Is the server overloaded? Running 2003ms or 40 ticks behind`,
		type: IServerConsoleLineType.Warning,
		time: '20:24:24',
	},
	{
		id: '26',
		message: `Unexpected error. Server crashed!`,
		type: IServerConsoleLineType.Error,
		time: '20:24:25',
	},
	{
		id: '27',
		message: `Using 4 threads for Netty based IO. Server stopped.`,
		type: IServerConsoleLineType.Error,
		time: '20:24:26',
	},
	{
		id: '28',
		message: 'Saving players.',
		type: IServerConsoleLineType.Info,
		time: '20:24:27',
	},
	{
		id: '29',
		message: 'Saving level world.',
		type: IServerConsoleLineType.Info,
		time: '20:24:28',
	},
	{
		id: '30',
		message: 'Thread Query Listener stopped',
		type: IServerConsoleLineType.Info,
		time: '20:24:29',
	},
]

export const serverCurrentUsage: IServerCurrentUsageItem[] = [
	{ label: 'Процессор', value: 58, maxValue: 100, color: 'purple', isPercent: true },
	{ label: 'Опер. память', value: 716, maxValue: 2500, color: 'blue', valueUnit: 'MB' },
	{ label: 'хранилище', value: 0.23, maxValue: 5, color: 'orange', valueUnit: 'GB' },
]

export const filesTree: IFileNode[] = [
	{
		path: 'banned-ips.json',
		name: 'banned-ips.json',
		type: 'file',
		extension: '.json',
		size: 2,
	},
	{
		path: 'banned-players.json',
		name: 'banned-players.json',
		type: 'file',
		extension: '.json',
		size: 2,
	},
	{
		path: 'eula.txt',
		name: 'eula.txt',
		type: 'file',
		extension: '.txt',
		size: 160,
	},
	{
		path: 'ops.json',
		name: 'ops.json',
		type: 'file',
		extension: '.json',
		size: 138,
	},
	{
		path: 'server.properties',
		name: 'server.properties',
		type: 'file',
		extension: '.properties',
		size: 1344,
	},
	{
		path: 'usercache.json',
		name: 'usercache.json',
		type: 'file',
		extension: '.json',
		size: 109,
	},
	{
		path: 'whitelist.json',
		name: 'whitelist.json',
		type: 'file',
		extension: '.json',
		size: 2,
	},
	{ path: 'world', name: 'world', type: 'directory', size: 22734954 },
	{ path: 'world/advancements', name: 'advancements', type: 'directory', size: 1622 },
	{
		path: 'world/advancements/ab7f5963-f01d-3980-8fa8-a422e88f9d12.json',
		name: 'ab7f5963-f01d-3980-8fa8-a422e88f9d12.json',
		type: 'file',
		extension: '.json',
		size: 1622,
	},
	{ path: 'world/data', name: 'data', type: 'directory', size: 90 },
	{
		path: 'world/data/raids.dat',
		name: 'raids.dat',
		type: 'file',
		extension: '.dat',
		size: 90,
	},
	{
		path: 'world/datapacks',
		name: 'datapacks',
		type: 'directory',
		size: 0,
	},
	{
		path: 'world/DIM-1',
		name: 'DIM-1',
		type: 'directory',
		size: 90,
	},
	{
		path: 'world/DIM-1/data',
		name: 'data',
		type: 'directory',
		size: 90,
	},
	{
		path: 'world/DIM-1/data/raids.dat',
		name: 'raids.dat',
		type: 'file',
		extension: '.dat',
		size: 90,
	},
	{
		path: 'world/DIM-1/data/boda.dat',
		name: 'boda.dat',
		type: 'file',
		extension: '.dat',
		size: 90,
	},
	{
		path: 'world/entities',
		name: 'entities',
		type: 'directory',
		size: 868352,
	},
	{
		path: 'world/entities/r.-1.-1.mca',
		name: 'r.-1.-1.mca',
		type: 'file',
		extension: '.mca',
		size: 102400,
	},
	{
		path: 'world/entities/r.-1.0.mca',
		name: 'r.-1.0.mca',
		type: 'file',
		extension: '.mca',
		size: 544768,
	},
	{
		path: 'world/entities/r.-2.0.mca',
		name: 'r.-2.0.mca',
		type: 'file',
		extension: '.mca',
		size: 36864,
	},
	{
		path: 'world/entities/r.0.-1.mca',
		name: 'r.0.-1.mca',
		type: 'file',
		extension: '.mca',
		size: 98304,
	},
	{
		path: 'world/entities/r.0.0.mca',
		name: 'r.0.0.mca',
		type: 'file',
		extension: '.mca',
		size: 86016,
	},
	{
		path: 'world/level.dat',
		name: 'level.dat',
		type: 'file',
		extension: '.dat',
		size: 1401,
	},
	{
		path: 'world/level.dat_old',
		name: 'level.dat_old',
		type: 'file',
		extension: '.dat_old',
		size: 1405,
	},
	{
		path: 'world/playerdata',
		name: 'playerdata',
		type: 'directory',
		size: 1014,
	},
	{
		path: 'world/playerdata/ab7f5963-f01d-3980-8fa8-a422e88f9d12.dat',
		name: 'ab7f5963-f01d-3980-8fa8-a422e88f9d12.dat',
		type: 'file',
		extension: '.dat',
		size: 1014,
	},
	{
		path: 'world/poi',
		name: 'poi',
		type: 'directory',
		size: 0,
	},
	{
		path: 'world/poi/r.-1.-1.mca',
		name: 'r.-1.-1.mca',
		type: 'file',
		extension: '.mca',
		size: 0,
	},
	{
		path: 'world/poi/r.-1.0.mca',
		name: 'r.-1.0.mca',
		type: 'file',
		extension: '.mca',
		size: 0,
	},
	{
		path: 'world/poi/r.0.-1.mca',
		name: 'r.0.-1.mca',
		type: 'file',
		extension: '.mca',
		size: 0,
	},
	{
		path: 'world/poi/r.0.0.mca',
		name: 'r.0.0.mca',
		type: 'file',
		extension: '.mca',
		size: 0,
	},
	{
		path: 'world/region',
		name: 'region',
		type: 'directory',
		size: 21860352,
	},
	{
		path: 'world/region/r.-1.-1.mca',
		name: 'r.-1.-1.mca',
		type: 'file',
		extension: '.mca',
		size: 4947968,
	},
	{
		path: 'world/region/r.-1.0.mca',
		name: 'r.-1.0.mca',
		type: 'file',
		extension: '.mca',
		size: 7278592,
	},
	{
		path: 'world/region/r.-1.1.mca',
		name: 'r.-1.1.mca',
		type: 'file',
		extension: '.mca',
		size: 135168,
	},
	{
		path: 'world/region/r.-2.-1.mca',
		name: 'r.-2.-1.mca',
		type: 'file',
		extension: '.mca',
		size: 909312,
	},
	{
		path: 'world/region/r.-2.0.mca',
		name: 'r.-2.0.mca',
		type: 'file',
		extension: '.mca',
		size: 2314240,
	},
	{
		path: 'world/region/r.-2.1.mca',
		name: 'r.-2.1.mca',
		type: 'file',
		extension: '.mca',
		size: 65536,
	},
	{
		path: 'world/region/r.0.-1.mca',
		name: 'r.0.-1.mca',
		type: 'file',
		extension: '.mca',
		size: 3022848,
	},
	{
		path: 'world/region/r.0.0.mca',
		name: 'r.0.0.mca',
		type: 'file',
		extension: '.mca',
		size: 3186688,
	},
	{
		path: 'world/session.lock',
		name: 'session.lock',
		type: 'file',
		extension: '.lock',
		size: 3,
	},
	{
		path: 'world/stats',
		name: 'stats',
		type: 'directory',
		size: 535,
	},
	{
		path: 'world/stats/ab7f5963-f01d-3980-8fa8-a422e88f9d12.json',
		name: 'ab7f5963-f01d-3980-8fa8-a422e88f9d12.json',
		type: 'file',
		extension: '.json',
		size: 535,
	},
	{ path: 'libraries', name: 'libraries', type: 'directory', size: 251512 },
	{
		path: 'libraries/com',
		name: 'com',
		type: 'directory',
		size: 5098995,
	},
	{
		path: 'libraries/com/github',
		name: 'github',
		type: 'directory',
		size: 947865,
	},
	{
		path: 'libraries/com/github/oshi',
		name: 'oshi',
		type: 'directory',
		size: 947865,
	},
	{
		path: 'libraries/com/github/oshi/oshi-core',
		name: 'oshi-core',
		type: 'directory',
		size: 947865,
	},
	{
		path: 'libraries/com/github/oshi/oshi-core/6.2.2',
		name: '6.2.2',
		type: 'directory',
		size: 947865,
	},
	{
		path: 'libraries/com/github/oshi/oshi-core/6.2.2/oshi-core-6.2.2.jar',
		name: 'oshi-core-6.2.2.jar',
		type: 'file',
		extension: '.jar',
		size: 947865,
	},
	{
		path: 'libraries/com/google',
		name: 'google',
		type: 'directory',
		size: 3250331,
	},
	{
		path: 'libraries/com/google/code',
		name: 'code',
		type: 'directory',
		size: 286235,
	},
	{
		path: 'libraries/com/google/code/gson',
		name: 'gson',
		type: 'directory',
		size: 286235,
	},
	{
		path: 'libraries/com/google/code/gson/gson',
		name: 'gson',
		type: 'directory',
		size: 286235,
	},
	{
		path: 'libraries/com/google/code/gson/gson/2.10',
		name: '2.10',
		type: 'directory',
		size: 286235,
	},
	{
		path: 'libraries/com/google/code/gson/gson/2.10/gson-2.10.jar',
		name: 'gson-2.10.jar',
		type: 'file',
		extension: '.jar',
		size: 286235,
	},
	{
		path: 'libraries/com/google/guava',
		name: 'guava',
		type: 'directory',
		size: 2964096,
	},
	{
		path: 'libraries/com/google/guava/failureaccess',
		name: 'failureaccess',
		type: 'directory',
		size: 4617,
	},
	{
		path: 'libraries/com/google/guava/failureaccess/1.0.1',
		name: '1.0.1',
		type: 'directory',
		size: 4617,
	},
	{
		path: 'libraries/com/google/guava/failureaccess/1.0.1/failureaccess-1.0.1.jar',
		name: 'failureaccess-1.0.1.jar',
		type: 'file',
		extension: '.jar',
		size: 4617,
	},
	{
		path: 'libraries/com/google/guava/guava',
		name: 'guava',
		type: 'directory',
		size: 2959479,
	},
	{
		path: 'libraries/com/google/guava/guava/31.1-jre',
		name: '31.1-jre',
		type: 'directory',
		size: 2959479,
	},
	{
		path: 'libraries/com/google/guava/guava/31.1-jre/guava-31.1-jre.jar',
		name: 'guava-31.1-jre.jar',
		type: 'file',
		extension: '.jar',
		size: 2959479,
	},
	// {
	// 	path: 'libraries/com/mojang',
	// 	name: 'mojang',
	// 	children: [
	// 		{
	// 			path: 'libraries/com/mojang/authlib',
	// 			name: 'authlib',
	// 			children: [
	// 				{
	// 					path: 'libraries/com/mojang/authlib/3.18.38',
	// 					name: '3.18.38',
	// 					children: [
	// 						{
	// 							path: 'libraries/com/mojang/authlib/3.18.38/authlib-3.18.38.jar',
	// 							name: 'authlib-3.18.38.jar',
	// 							type: 'file',
	// 							extension: '.jar',
	// 							size: 118354,
	// 						},
	// 					],
	// 					type: 'directory',
	// 					size: 118354,
	// 				},
	// 			],
	// 			type: 'directory',
	// 			size: 118354,
	// 		},
	// 		{
	// 			path: 'libraries/com/mojang/brigadier',
	// 			name: 'brigadier',
	// 			children: [
	// 				{
	// 					path: 'libraries/com/mojang/brigadier/1.0.18',
	// 					name: '1.0.18',
	// 					children: [
	// 						{
	// 							path: 'libraries/com/mojang/brigadier/1.0.18/brigadier-1.0.18.jar',
	// 							name: 'brigadier-1.0.18.jar',
	// 							type: 'file',
	// 							extension: '.jar',
	// 							size: 77116,
	// 						},
	// 					],
	// 					type: 'directory',
	// 					size: 77116,
	// 				},
	// 			],
	// 			type: 'directory',
	// 			size: 77116,
	// 		},
	// 		{
	// 			path: 'libraries/com/mojang/datafixerupper',
	// 			name: 'datafixerupper',
	// 			children: [
	// 				{
	// 					path: 'libraries/com/mojang/datafixerupper/6.0.6',
	// 					name: '6.0.6',
	// 					children: [
	// 						{
	// 							path: 'libraries/com/mojang/datafixerupper/6.0.6/datafixerupper-6.0.6.jar',
	// 							name: 'datafixerupper-6.0.6.jar',
	// 							type: 'file',
	// 							extension: '.jar',
	// 							size: 689986,
	// 						},
	// 					],
	// 					type: 'directory',
	// 					size: 689986,
	// 				},
	// 			],
	// 			type: 'directory',
	// 			size: 689986,
	// 		},
	// 		{
	// 			path: 'libraries/com/mojang/logging',
	// 			name: 'logging',
	// 			children: [
	// 				{
	// 					path: 'libraries/com/mojang/logging/1.1.1',
	// 					name: '1.1.1',
	// 					children: [
	// 						{
	// 							path: 'libraries/com/mojang/logging/1.1.1/logging-1.1.1.jar',
	// 							name: 'logging-1.1.1.jar',
	// 							type: 'file',
	// 							extension: '.jar',
	// 							size: 15343,
	// 						},
	// 					],
	// 					type: 'directory',
	// 					size: 15343,
	// 				},
	// 			],
	// 			type: 'directory',
	// 			size: 15343,
	// 		},
	// 	],
	// 	type: 'directory',
	// 	size: 900799,
	// },
]

/*
	{
		path: 'libraries',
		name: 'libraries',
		children: [
			{
				path: 'libraries/commons-io',
				name: 'commons-io',
				children: [
					{
						path: 'libraries/commons-io/commons-io',
						name: 'commons-io',
						children: [
							{
								path: 'libraries/commons-io/commons-io/2.11.0',
								name: '2.11.0',
								children: [
									{
										path: 'libraries/commons-io/commons-io/2.11.0/commons-io-2.11.0.jar',
										name: 'commons-io-2.11.0.jar',
										type: 'file',
										extension: '.jar',
										size: 327135,
									},
								],
								type: 'directory',
								size: 327135,
							},
						],
						type: 'directory',
						size: 327135,
					},
				],
				type: 'directory',
				size: 327135,
			},
			{
				path: 'libraries/io',
				name: 'io',
				children: [
					{
						path: 'libraries/io/netty',
						name: 'netty',
						children: [
							{
								path: 'libraries/io/netty/netty-buffer',
								name: 'netty-buffer',
								children: [
									{
										path: 'libraries/io/netty/netty-buffer/4.1.82.Final',
										name: '4.1.82.Final',
										children: [
											{
												path: 'libraries/io/netty/netty-buffer/4.1.82.Final/netty-buffer-4.1.82.Final.jar',
												name: 'netty-buffer-4.1.82.Final.jar',
												type: 'file',
												extension: '.jar',
												size: 304664,
											},
										],
										type: 'directory',
										size: 304664,
									},
								],
								type: 'directory',
								size: 304664,
							},
							{
								path: 'libraries/io/netty/netty-codec',
								name: 'netty-codec',
								children: [
									{
										path: 'libraries/io/netty/netty-codec/4.1.82.Final',
										name: '4.1.82.Final',
										children: [
											{
												path: 'libraries/io/netty/netty-codec/4.1.82.Final/netty-codec-4.1.82.Final.jar',
												name: 'netty-codec-4.1.82.Final.jar',
												type: 'file',
												extension: '.jar',
												size: 339155,
											},
										],
										type: 'directory',
										size: 339155,
									},
								],
								type: 'directory',
								size: 339155,
							},
							{
								path: 'libraries/io/netty/netty-common',
								name: 'netty-common',
								children: [
									{
										path: 'libraries/io/netty/netty-common/4.1.82.Final',
										name: '4.1.82.Final',
										children: [
											{
												path: 'libraries/io/netty/netty-common/4.1.82.Final/netty-common-4.1.82.Final.jar',
												name: 'netty-common-4.1.82.Final.jar',
												type: 'file',
												extension: '.jar',
												size: 653880,
											},
										],
										type: 'directory',
										size: 653880,
									},
								],
								type: 'directory',
								size: 653880,
							},
							{
								path: 'libraries/io/netty/netty-handler',
								name: 'netty-handler',
								children: [
									{
										path: 'libraries/io/netty/netty-handler/4.1.82.Final',
										name: '4.1.82.Final',
										children: [
											{
												path: 'libraries/io/netty/netty-handler/4.1.82.Final/netty-handler-4.1.82.Final.jar',
												name: 'netty-handler-4.1.82.Final.jar',
												type: 'file',
												extension: '.jar',
												size: 538569,
											},
										],
										type: 'directory',
										size: 538569,
									},
								],
								type: 'directory',
								size: 538569,
							},
							{
								path: 'libraries/io/netty/netty-resolver',
								name: 'netty-resolver',
								children: [
									{
										path: 'libraries/io/netty/netty-resolver/4.1.82.Final',
										name: '4.1.82.Final',
										children: [
											{
												path: 'libraries/io/netty/netty-resolver/4.1.82.Final/netty-resolver-4.1.82.Final.jar',
												name: 'netty-resolver-4.1.82.Final.jar',
												type: 'file',
												extension: '.jar',
												size: 37776,
											},
										],
										type: 'directory',
										size: 37776,
									},
								],
								type: 'directory',
								size: 37776,
							},
							{
								path: 'libraries/io/netty/netty-transport',
								name: 'netty-transport',
								children: [
									{
										path: 'libraries/io/netty/netty-transport/4.1.82.Final',
										name: '4.1.82.Final',
										children: [
											{
												path: 'libraries/io/netty/netty-transport/4.1.82.Final/netty-transport-4.1.82.Final.jar',
												name: 'netty-transport-4.1.82.Final.jar',
												type: 'file',
												extension: '.jar',
												size: 485752,
											},
										],
										type: 'directory',
										size: 485752,
									},
								],
								type: 'directory',
								size: 485752,
							},
							{
								path: 'libraries/io/netty/netty-transport-classes-epoll',
								name: 'netty-transport-classes-epoll',
								children: [
									{
										path: 'libraries/io/netty/netty-transport-classes-epoll/4.1.82.Final',
										name: '4.1.82.Final',
										children: [
											{
												path: 'libraries/io/netty/netty-transport-classes-epoll/4.1.82.Final/netty-transport-classes-epoll-4.1.82.Final.jar',
												name: 'netty-transport-classes-epoll-4.1.82.Final.jar',
												type: 'file',
												extension: '.jar',
												size: 142066,
											},
										],
										type: 'directory',
										size: 142066,
									},
								],
								type: 'directory',
								size: 142066,
							},
							{
								path: 'libraries/io/netty/netty-transport-native-epoll',
								name: 'netty-transport-native-epoll',
								children: [
									{
										path: 'libraries/io/netty/netty-transport-native-epoll/4.1.82.Final',
										name: '4.1.82.Final',
										children: [
											{
												path: 'libraries/io/netty/netty-transport-native-epoll/4.1.82.Final/netty-transport-native-epoll-4.1.82.Final-linux-aarch_64.jar',
												name: 'netty-transport-native-epoll-4.1.82.Final-linux-aarch_64.jar',
												type: 'file',
												extension: '.jar',
												size: 39489,
											},
											{
												path: 'libraries/io/netty/netty-transport-native-epoll/4.1.82.Final/netty-transport-native-epoll-4.1.82.Final-linux-x86_64.jar',
												name: 'netty-transport-native-epoll-4.1.82.Final-linux-x86_64.jar',
												type: 'file',
												extension: '.jar',
												size: 37922,
											},
										],
										type: 'directory',
										size: 77411,
									},
								],
								type: 'directory',
								size: 77411,
							},
							{
								path: 'libraries/io/netty/netty-transport-native-unix-common',
								name: 'netty-transport-native-unix-common',
								children: [
									{
										path: 'libraries/io/netty/netty-transport-native-unix-common/4.1.82.Final',
										name: '4.1.82.Final',
										children: [
											{
												path: 'libraries/io/netty/netty-transport-native-unix-common/4.1.82.Final/netty-transport-native-unix-common-4.1.82.Final.jar',
												name: 'netty-transport-native-unix-common-4.1.82.Final.jar',
												type: 'file',
												extension: '.jar',
												size: 43684,
											},
										],
										type: 'directory',
										size: 43684,
									},
								],
								type: 'directory',
								size: 43684,
							},
						],
						type: 'directory',
						size: 2622957,
					},
				],
				type: 'directory',
				size: 2622957,
			},
			{
				path: 'libraries/it',
				name: 'it',
				children: [
					{
						path: 'libraries/it/unimi',
						name: 'unimi',
						children: [
							{
								path: 'libraries/it/unimi/dsi',
								name: 'dsi',
								children: [
									{
										path: 'libraries/it/unimi/dsi/fastutil',
										name: 'fastutil',
										children: [
											{
												path: 'libraries/it/unimi/dsi/fastutil/8.5.9',
												name: '8.5.9',
												children: [
													{
														path: 'libraries/it/unimi/dsi/fastutil/8.5.9/fastutil-8.5.9.jar',
														name: 'fastutil-8.5.9.jar',
														type: 'file',
														extension: '.jar',
														size: 23376043,
													},
												],
												type: 'directory',
												size: 23376043,
											},
										],
										type: 'directory',
										size: 23376043,
									},
								],
								type: 'directory',
								size: 23376043,
							},
						],
						type: 'directory',
						size: 23376043,
					},
				],
				type: 'directory',
				size: 23376043,
			},
			{
				path: 'libraries/net',
				name: 'net',
				children: [
					{
						path: 'libraries/net/java',
						name: 'java',
						children: [
							{
								path: 'libraries/net/java/dev',
								name: 'dev',
								children: [
									{
										path: 'libraries/net/java/dev/jna',
										name: 'jna',
										children: [
											{
												path: 'libraries/net/java/dev/jna/jna',
												name: 'jna',
												children: [
													{
														path: 'libraries/net/java/dev/jna/jna/5.12.1',
														name: '5.12.1',
														children: [
															{
																path: 'libraries/net/java/dev/jna/jna/5.12.1/jna-5.12.1.jar',
																name: 'jna-5.12.1.jar',
																type: 'file',
																extension: '.jar',
																size: 1866196,
															},
														],
														type: 'directory',
														size: 1866196,
													},
												],
												type: 'directory',
												size: 1866196,
											},
											{
												path: 'libraries/net/java/dev/jna/jna-platform',
												name: 'jna-platform',
												children: [
													{
														path: 'libraries/net/java/dev/jna/jna-platform/5.12.1',
														name: '5.12.1',
														children: [
															{
																path: 'libraries/net/java/dev/jna/jna-platform/5.12.1/jna-platform-5.12.1.jar',
																name: 'jna-platform-5.12.1.jar',
																type: 'file',
																extension: '.jar',
																size: 1356627,
															},
														],
														type: 'directory',
														size: 1356627,
													},
												],
												type: 'directory',
												size: 1356627,
											},
										],
										type: 'directory',
										size: 3222823,
									},
								],
								type: 'directory',
								size: 3222823,
							},
						],
						type: 'directory',
						size: 3222823,
					},
					{
						path: 'libraries/net/sf',
						name: 'sf',
						children: [
							{
								path: 'libraries/net/sf/jopt-simple',
								name: 'jopt-simple',
								children: [
									{
										path: 'libraries/net/sf/jopt-simple/jopt-simple',
										name: 'jopt-simple',
										children: [
											{
												path: 'libraries/net/sf/jopt-simple/jopt-simple/5.0.4',
												name: '5.0.4',
												children: [
													{
														path: 'libraries/net/sf/jopt-simple/jopt-simple/5.0.4/jopt-simple-5.0.4.jar',
														name: 'jopt-simple-5.0.4.jar',
														type: 'file',
														extension: '.jar',
														size: 78146,
													},
												],
												type: 'directory',
												size: 78146,
											},
										],
										type: 'directory',
										size: 78146,
									},
								],
								type: 'directory',
								size: 78146,
							},
						],
						type: 'directory',
						size: 78146,
					},
				],
				type: 'directory',
				size: 3300969,
			},
			{
				path: 'libraries/org',
				name: 'org',
				children: [
					{
						path: 'libraries/org/apache',
						name: 'apache',
						children: [
							{
								path: 'libraries/org/apache/commons',
								name: 'commons',
								children: [
									{
										path: 'libraries/org/apache/commons/commons-lang3',
										name: 'commons-lang3',
										children: [
											{
												path: 'libraries/org/apache/commons/commons-lang3/3.12.0',
												name: '3.12.0',
												children: [
													{
														path: 'libraries/org/apache/commons/commons-lang3/3.12.0/commons-lang3-3.12.0.jar',
														name: 'commons-lang3-3.12.0.jar',
														type: 'file',
														extension: '.jar',
														size: 587402,
													},
												],
												type: 'directory',
												size: 587402,
											},
										],
										type: 'directory',
										size: 587402,
									},
								],
								type: 'directory',
								size: 587402,
							},
							{
								path: 'libraries/org/apache/logging',
								name: 'logging',
								children: [
									{
										path: 'libraries/org/apache/logging/log4j',
										name: 'log4j',
										children: [
											{
												path: 'libraries/org/apache/logging/log4j/log4j-api',
												name: 'log4j-api',
												children: [
													{
														path: 'libraries/org/apache/logging/log4j/log4j-api/2.19.0',
														name: '2.19.0',
														children: [
															{
																path: 'libraries/org/apache/logging/log4j/log4j-api/2.19.0/log4j-api-2.19.0.jar',
																name: 'log4j-api-2.19.0.jar',
																type: 'file',
																extension: '.jar',
																size: 317566,
															},
														],
														type: 'directory',
														size: 317566,
													},
												],
												type: 'directory',
												size: 317566,
											},
											{
												path: 'libraries/org/apache/logging/log4j/log4j-core',
												name: 'log4j-core',
												children: [
													{
														path: 'libraries/org/apache/logging/log4j/log4j-core/2.19.0',
														name: '2.19.0',
														children: [
															{
																path: 'libraries/org/apache/logging/log4j/log4j-core/2.19.0/log4j-core-2.19.0.jar',
																name: 'log4j-core-2.19.0.jar',
																type: 'file',
																extension: '.jar',
																size: 1864386,
															},
														],
														type: 'directory',
														size: 1864386,
													},
												],
												type: 'directory',
												size: 1864386,
											},
											{
												path: 'libraries/org/apache/logging/log4j/log4j-slf4j2-impl',
												name: 'log4j-slf4j2-impl',
												children: [
													{
														path: 'libraries/org/apache/logging/log4j/log4j-slf4j2-impl/2.19.0',
														name: '2.19.0',
														children: [
															{
																path: 'libraries/org/apache/logging/log4j/log4j-slf4j2-impl/2.19.0/log4j-slf4j2-impl-2.19.0.jar',
																name: 'log4j-slf4j2-impl-2.19.0.jar',
																type: 'file',
																extension: '.jar',
																size: 27721,
															},
														],
														type: 'directory',
														size: 27721,
													},
												],
												type: 'directory',
												size: 27721,
											},
										],
										type: 'directory',
										size: 2209673,
									},
								],
								type: 'directory',
								size: 2209673,
							},
						],
						type: 'directory',
						size: 2797075,
					},
					{
						path: 'libraries/org/joml',
						name: 'joml',
						children: [
							{
								path: 'libraries/org/joml/joml',
								name: 'joml',
								children: [
									{
										path: 'libraries/org/joml/joml/1.10.5',
										name: '1.10.5',
										children: [
											{
												path: 'libraries/org/joml/joml/1.10.5/joml-1.10.5.jar',
												name: 'joml-1.10.5.jar',
												type: 'file',
												extension: '.jar',
												size: 712082,
											},
										],
										type: 'directory',
										size: 712082,
									},
								],
								type: 'directory',
								size: 712082,
							},
						],
						type: 'directory',
						size: 712082,
					},
					{
						path: 'libraries/org/slf4j',
						name: 'slf4j',
						children: [
							{
								path: 'libraries/org/slf4j/slf4j-api',
								name: 'slf4j-api',
								children: [
									{
										path: 'libraries/org/slf4j/slf4j-api/2.0.1',
										name: '2.0.1',
										children: [
											{
												path: 'libraries/org/slf4j/slf4j-api/2.0.1/slf4j-api-2.0.1.jar',
												name: 'slf4j-api-2.0.1.jar',
												type: 'file',
												extension: '.jar',
												size: 61388,
											},
										],
										type: 'directory',
										size: 61388,
									},
								],
								type: 'directory',
								size: 61388,
							},
						],
						type: 'directory',
						size: 61388,
					},
				],
				type: 'directory',
				size: 3570545,
			},
		],
		type: 'directory',
		size: 38296644,
	},
	{
		path: 'logs',
		name: 'logs',
		children: [
			{
				path: 'logs/2023-03-27-1.log.gz',
				name: '2023-03-27-1.log.gz',
				type: 'file',
				extension: '.gz',
				size: 176,
			},
			{
				path: 'logs/2023-03-27-2.log.gz',
				name: '2023-03-27-2.log.gz',
				type: 'file',
				extension: '.gz',
				size: 568,
			},
			{
				path: 'logs/2023-03-29-1.log.gz',
				name: '2023-03-29-1.log.gz',
				type: 'file',
				extension: '.gz',
				size: 556,
			},
			{
				path: 'logs/latest.log',
				name: 'latest.log',
				type: 'file',
				extension: '.log',
				size: 2283,
			},
		],
		type: 'directory',
		size: 3583,
	},
	{
		path: 'mods',
		name: 'mods',
		children: [],
		type: 'directory',
		size: 0,
	},
*/
