import { CommonUrls, ServerUrls } from '@/shared/routes/urls'

export const slogan = 'Функциональный хостинг игровых серверов'
export const copyright = '2023 SimpleHost'

type NavItem = {
	label: string
	url: string
}

export const mainColumn: NavItem[] = [
	{ label: 'Главная', url: CommonUrls.home() },
	{ label: 'Тарифы', url: '/tariffs' },
	{ label: 'Мои сервера', url: ServerUrls.servers() },
]

export const secondaryColumn: NavItem[] = [
	{ label: 'Публичные сервера', url: ServerUrls.publicServers() },
	{ label: 'Обратная связь', url: CommonUrls.feedback() },
	{ label: 'FAQ', url: CommonUrls.help() },
]

export const socials: NavItem[] = [
	{ label: 'VK', url: 'https://vk.com/simplehost' },
	{ label: 'Telegram', url: 'https://t.me/simplehost' },
	{ label: 'YouTube', url: 'https://www.youbute.com/c/simplehost' },
]

export const contactEmail = 'admin@simplehost.ru'
