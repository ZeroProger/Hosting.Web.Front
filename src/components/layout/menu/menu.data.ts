import {
	getAdminUrl,
	getFeedbackUrl,
	getHelpUrl,
	getLogoutUrl,
	getProfileUrl,
	getSettingsUrl,
} from '@/config/url.config'

import { IMenu, IUserMenu } from './menu.interface'

export const userMenu: IUserMenu = {
	items: [
		{ id: 1, title: 'Мой профиль', link: getProfileUrl(), addDivider: false },
		{ id: 2, title: 'Настройки', link: getSettingsUrl(), addDivider: true },
		{ id: 3, title: 'Помощь', link: getHelpUrl(), addDivider: false },
		{ id: 4, title: 'Обратная связь', link: getFeedbackUrl(), addDivider: false },
		{ id: 5, title: 'Выйти', link: getLogoutUrl(), addDivider: true },
	],
}

export const adminMenu: IMenu = {
	title: 'Администрирование',
	items: [{ id: 1, icon: 'MdAdminPanelSettings', title: 'Админ-панель', link: getAdminUrl() }],
}
