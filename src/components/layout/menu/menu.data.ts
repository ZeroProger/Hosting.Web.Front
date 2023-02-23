import { IMenu, IUserMenu } from './menu.interface'

export const userMenu: IUserMenu = {
	items: [
		{ id: 1, title: 'Мой профиль', link: '/profile', addDivider: false },
		{ id: 2, title: 'Настройки', link: '/settings', addDivider: true },
		{ id: 3, title: 'Помощь', link: '/help', addDivider: false },
		{ id: 4, title: 'Обратная связь', link: '/feedback', addDivider: false },
		{ id: 5, title: 'Выйти', link: '/logout', addDivider: true },
	],
}

export const adminMenu: IMenu = {
	title: 'Администрирование',
	items: [{ id: 1, icon: 'MdAdminPanelSettings', title: 'Админ-панель', link: '/admin' }],
}
