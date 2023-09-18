import {
	getAdminUrl,
	getFeedbackUrl,
	getHelpUrl,
	getLogoutUrl,
	getProfileUrl,
	getPublicServersUrl,
	getServersUrl,
	getSettingsUrl,
} from '@/config/url.config'

import { IMenu, IUserMenu } from './menu.interface'

export const userMenu: IUserMenu = {
	items: [
		{ id: 1, title: 'Мой профиль', link: getProfileUrl(), addDivider: false },
		{ id: 2, title: 'Мои сервера', link: getServersUrl(), addDivider: false },
		{ id: 3, title: 'Публичные сервера', link: getPublicServersUrl(), addDivider: false },
		{ id: 4, title: 'Настройки', link: getSettingsUrl(), addDivider: true },
		{ id: 5, title: 'Помощь', link: getHelpUrl(), addDivider: false },
		{ id: 6, title: 'Обратная связь', link: getFeedbackUrl(), addDivider: false },
		{ id: 7, title: 'Выйти', link: getLogoutUrl(), addDivider: true },
	],
}

export const adminMenu: IMenu = {
	title: 'Администрирование',
	items: [{ id: 1, icon: 'MdAdminPanelSettings', title: 'Админ-панель', link: getAdminUrl() }],
}
