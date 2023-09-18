import { ServerUrls } from '@/shared/routes/urls'

type navItem = {
	label: string
	url: string
}

export const items: navItem[] = [
	{ label: 'Мои сервера', url: ServerUrls.servers() },
	{ label: 'Публичные сервера', url: ServerUrls.publicServers() },
]
