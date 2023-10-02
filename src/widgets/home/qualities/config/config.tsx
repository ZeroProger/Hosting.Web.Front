import { CreditCard, HelpCircle, Settings, Trophy } from 'lucide-react'

interface IQuality {
	id: number
	title: string
	description: string
	icon: React.ReactNode
}

export const qualities: IQuality[] = [
	{
		id: 1,
		title: 'Качество серверов',
		description:
			'Бесперебойная работа серверов и резервирование данных гарантируют стабильность и надежность',
		icon: <Trophy size={80} />,
	},
	{
		id: 2,
		title: 'Удобная оплата',
		description:
			'Возможность оплатить всеми доступными электронными способами, а так же через банковский перевод и СБП',
		icon: <CreditCard size={80} />,
	},
	{
		id: 3,
		title: 'Простота управления',
		description:
			'Автоматическая установка сервера. Интуитивное управление. Установка дополнений в 1 клик. Удобный интерфейс редактирования файлов.',
		icon: <Settings size={80} />,
	},
	{
		id: 4,
		title: 'Поддержка',
		description:
			'Оперативно ответим на ваши вопросы и решим проблемы, подскажем в настройке сервера',
		icon: <HelpCircle size={80} />,
	},
]
