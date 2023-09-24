import {
	BarChart3,
	Globe2,
	LayoutTemplate,
	MousePointerClick,
	PackagePlus,
	ShieldCheck,
	TerminalSquare,
	Timer,
	UploadCloud,
	UserPlus,
} from 'lucide-react'

interface IFeature {
	id: number
	title: string
	description: string
	icon: React.ReactNode
}

export const features: IFeature[] = [
	{
		id: 1,
		title: 'Защита',
		description: 'Защита вашего сервера от DDOS-атак',
		icon: <ShieldCheck />,
	},
	{
		id: 2,
		title: 'Простота',
		description: 'Интуитивно понятный интерфейс управления сервером',
		icon: <MousePointerClick />,
	},
	{
		id: 3,
		title: 'Шаблоны',
		description:
			'Возможность запустить сервер с модами и плагинами в течении нескольких минут после оплаты',
		icon: <LayoutTemplate />,
	},
	{
		id: 4,
		title: 'Моды и плагины',
		description: 'Установка любых модов и плагинов в 1 клик',
		icon: <PackagePlus />,
	},
	{
		id: 5,
		title: 'Пользовательские миры',
		description: 'Самые разнообразные миры от других игроков',
		icon: <Globe2 />,
	},
	{
		id: 6,
		title: 'Бекапы',
		description: 'Автоматически сохраняем ваш сервер, восстановление - в 1 клик',
		icon: <UploadCloud />,
	},
	{
		id: 7,
		title: 'Планировщик',
		description: 'Выполнение различных задач (рестарт, команды) по расписанию',
		icon: <Timer />,
	},
	{
		id: 8,
		title: 'Мониторинг',
		description: 'Мониторинг используемых ресурсов',
		icon: <BarChart3 />,
	},
	{
		id: 9,
		title: 'Консоль',
		description: 'Полноценная консоль с подсветкой ошибок и выполнением команд',
		icon: <TerminalSquare />,
	},
	{
		id: 10,
		title: 'Совладельцы',
		description: 'С гибкой настройкой прав управления сервером',
		icon: <UserPlus />,
	},
]
