import { Metadata } from 'next'

import { Home } from '@/pages/home/home'

export const metadata: Metadata = {
	title: 'Главная',
	description: 'Хостинг игровых серверов SimpleHost.',
}

/**
 * @returns {JSX.Element} Главная страница
 */
export default async function HomePage() {
	return <Home />
}
