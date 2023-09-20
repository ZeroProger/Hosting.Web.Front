import { ServerUrls } from '@/shared/routes/urls'

type navItem = {
	label: string
	url: string
}

export const menuItems: navItem[] = [
	{ label: 'Мои сервера', url: ServerUrls.servers() },
	{ label: 'Публичные сервера', url: ServerUrls.publicServers() },
]
