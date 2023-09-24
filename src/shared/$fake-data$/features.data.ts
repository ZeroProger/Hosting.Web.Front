import { IconName } from '@/shared/ui/icon'

//#TODO: куда девать интерфейсы?
export interface IFeature {
	id: number
	title: string
	description: string
	icon: IconName
}

export const features: IFeature[] = [
	{
		id: 1,
		title: 'Защита',
		description: 'Защита вашего сервера от DDOS-атак',
		icon: 'shield-check',
	},
	{
		id: 2,
		title: 'Простота',
		description: 'Интуитивно понятный интерфейс управления сервером',
		icon: 'mouse-pointer-click',
	},
	{
		id: 3,
		title: 'Шаблоны',
		description:
			'Возможность запустить сервер с модами и плагинами в течении нескольких минут после оплаты',
		icon: 'layout-template',
	},
	{
		id: 4,
		title: 'Моды и плагины',
		description: 'Установка любых модов и плагинов в 1 клик',
		icon: 'package-plus',
	},
	{
		id: 5,
		title: 'Пользовательские миры',
		description: 'Самые разнообразные миры от других игроков',
		icon: 'globe-2',
	},
	{
		id: 6,
		title: 'Бекапы',
		description: 'Автоматически сохраняем ваш сервер, восстановление - в 1 клик',
		icon: 'upload-cloud',
	},
	{
		id: 7,
		title: 'Планировщик',
		description: 'Выполнение различных задач (рестарт, команды) по расписанию',
		icon: 'timer',
	},
	{
		id: 8,
		title: 'Мониторинг',
		description: 'Мониторинг используемых ресурсов',
		icon: 'bar-chart-3',
	},
	{
		id: 9,
		title: 'Консоль',
		description: 'Полноценная консоль с подсветкой ошибок и выполнением команд',
		icon: 'terminal-square',
	},
	{
		id: 10,
		title: 'Совладельцы',
		description: 'С гибкой настройкой прав управления сервером',
		icon: 'user-plus',
	},
]

export const qualities: IFeature[] = [
	{
		id: 1,
		title: 'Качество серверов',
		description:
			'Бесперебойная работа серверов и резервирование данных гарантируют стабильность и надежность',
		icon: 'trophy',
	},
	{
		id: 2,
		title: 'Удобная оплата',
		description:
			'Возможность оплатить всеми доступными электронными способами, а так же через банковский перевод и СБП',
		icon: 'credit-card',
	},
	{
		id: 3,
		title: 'Простота управления',
		description:
			'Автоматическая установка сервера. Интуитивное управление. Установка дополнений в 1 клик. Удобный интерфейс редактирования файлов.',
		icon: 'settings',
	},
	{
		id: 4,
		title: 'Поддержка',
		description:
			'Оперативно ответим на ваши вопросы и решим проблемы, подскажем в настройке сервера',
		icon: 'help-circle',
	},
]
