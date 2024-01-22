import { Metadata } from 'next'

const NO_INDEX_CONFIG: Omit<Metadata, 'title'> = {
	robots: { index: false, follow: false },
}

interface IBasicMetadata extends Metadata {
	title: string
}

interface IBasicDynamicMetadata extends Omit<Metadata, 'title'> {
	title: (value?: string) => string
}

interface ISeoConfig {
	server: IServerSeoConfig
	common: ICommonSeoConfig
	auth: IAuthSeoConfig
}

interface IServerSeoConfig {
	overview: IBasicDynamicMetadata
	players: IBasicDynamicMetadata
	whiteList: IBasicDynamicMetadata
	bannedIps: IBasicDynamicMetadata
	bannedPlayers: IBasicDynamicMetadata
	operators: IBasicDynamicMetadata
	mods: IBasicMetadata
	modsSearch: IBasicDynamicMetadata
	mod: IBasicDynamicMetadata
	modFiles: IBasicDynamicMetadata
	modImages: IBasicDynamicMetadata
	console: IBasicDynamicMetadata
	logs: IBasicDynamicMetadata
	files: IBasicDynamicMetadata
	backups: IBasicDynamicMetadata
	settings: IBasicDynamicMetadata
	userServers: IBasicMetadata
	publicServers: IBasicMetadata
	createServer: IBasicMetadata
	testServer: IBasicMetadata
}

interface ICommonSeoConfig {
	home: IBasicMetadata
}

interface IAuthSeoConfig {
	signIn: IBasicMetadata
	signUp: IBasicMetadata
}

const ServerSeoConfig: IServerSeoConfig = {
	overview: {
		title: (value?: string) => `Панель управления – Сервер ${value}`,
		...NO_INDEX_CONFIG,
	},
	players: {
		title: (value?: string) => `Управление игроками – Сервер ${value}`,
		...NO_INDEX_CONFIG,
	},
	whiteList: {
		title: (value?: string) => `Белый список игроков – Сервер ${value}`,
		...NO_INDEX_CONFIG,
	},
	bannedIps: {
		title: (value?: string) => `Заблокированные IP-адреса – Сервер ${value}`,
		...NO_INDEX_CONFIG,
	},
	bannedPlayers: {
		title: (value?: string) => `Заблокированные игроки – Сервер ${value}`,
		...NO_INDEX_CONFIG,
	},
	operators: { title: (value?: string) => `Операторы – Сервер ${value}`, ...NO_INDEX_CONFIG },
	mods: { title: 'Подборки популярных модификаций', ...NO_INDEX_CONFIG },
	modsSearch: {
		title: (value?: string) => `Поиск модов по запросу \'${value}\'`,
		...NO_INDEX_CONFIG,
	},
	mod: { title: (value?: string) => `Основная информация – Мод ${value}`, ...NO_INDEX_CONFIG },
	modFiles: { title: (value?: string) => `Файлы – Мод ${value}`, ...NO_INDEX_CONFIG },
	modImages: { title: (value?: string) => `Скриншоты – Мод ${value}`, ...NO_INDEX_CONFIG },
	console: {
		title: (value?: string) => `Консоль – Сервер ${value}`,
		...NO_INDEX_CONFIG,
	},
	logs: { title: (value?: string) => `Логи – Сервер ${value}`, ...NO_INDEX_CONFIG },
	files: { title: (value?: string) => `Файлы – Сервер ${value}`, ...NO_INDEX_CONFIG },
	backups: { title: (value?: string) => `Резервные копии – Сервер ${value}`, ...NO_INDEX_CONFIG },
	settings: { title: (value?: string) => `Настройки – Сервер ${value}`, ...NO_INDEX_CONFIG },
	userServers: { title: 'Мои сервера', ...NO_INDEX_CONFIG },
	publicServers: { title: 'Публичные сервера', description: 'Список публичных серверов' },
	createServer: { title: 'Создание сервера', description: 'Создание нового сервера' },
	testServer: {
		title: 'Тестирование сервера',
		description: 'Бесплатно протестируйте наш хостинг в течение 24 часов!',
	},
}

const CommonSeoConfig: ICommonSeoConfig = {
	home: {
		title: 'SimpleHost – дешевый и стабильный хостинг Minecraft серверов!',
		description:
			'Только у нас за относительно небольшую плату вы получите множество удобных функций администрирования вашего сервера прямо с сайта! Среди них: консоль с подсказками при вводе команд, продвинутая файловая система, и многое другое!',
	},
}

const AuthSeoConfig: IAuthSeoConfig = {
	signIn: { title: 'Вход в аккаунт', description: 'Войдите в свой аккаунт' },
	signUp: { title: 'Регистрация', description: 'Зарегистрируйтесь сейчас и создайте сервер за несколько минут' },
}

export const SeoConfig: ISeoConfig = {
	server: {
		...ServerSeoConfig,
	},
	common: {
		...CommonSeoConfig,
	},
	auth: {
		...AuthSeoConfig
	}
}
