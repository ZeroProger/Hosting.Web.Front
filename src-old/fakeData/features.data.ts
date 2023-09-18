import { IFeature } from './../shared/types/features.types'

export const features: IFeature[] = [
	{
		id: 1,
		title: 'Защита',
		description: 'Защита вашего сервера от DDOS-атак',
		icon: 'BsShieldShaded',
	},
	{
		id: 2,
		title: 'Простота',
		description: 'Интуитивно понятный интерфейс управления сервером',
		icon: 'HiCursorClick',
	},
	{
		id: 3,
		title: 'Шаблоны',
		description:
			'Возможность запустить сервер с модами и плагинами в течении нескольких минут после оплаты',
		icon: 'HiTemplate',
	},
	{
		id: 4,
		title: 'Моды и плагины',
		description: 'Установка любых модов и плагинов в 1 клик',
		icon: 'HiOutlineViewGridAdd',
	},
	{
		id: 5,
		title: 'Пользовательские миры',
		description: 'Самые разнообразные миры от других игроков',
		icon: 'BiWorld',
	},
	{
		id: 6,
		title: 'Бекапы',
		description: 'Автоматически сохраняем ваш сервер, восстановление - в 1 клик',
		icon: 'MdCloudUpload',
	},
	{
		id: 7,
		title: 'Планировщик',
		description: 'Выполнение различных задач (рестарт, команды) по расписанию',
		icon: 'Io5TimerSharp',
	},
	{
		id: 8,
		title: 'Мониторинг',
		description: 'Мониторинг используемых ресурсов',
		icon: 'Io5StatsChart',
	},
	{
		id: 9,
		title: 'Консоль',
		description: 'Полноценная консоль с подсветкой ошибок и выполнением команд',
		icon: 'VscTerminalCmd',
	},
	{
		id: 10,
		title: 'Совладельцы',
		description: 'С гибкой настройкой прав управления сервером',
		icon: 'MdGroupAdd',
	},
]

export const qualities: IFeature[] = [
	{
		id: 1,
		title: 'Качество серверов',
		description:
			'Бесперебойная работа серверов и резервирование данных гарантируют стабильность и надежность',
		icon: 'BsTrophyFill',
	},
	{
		id: 2,
		title: 'Удобная оплата',
		description:
			'Возможность оплатить всеми доступными электронными способами, а так же через банковский перевод и СБП',
		icon: 'FaCreditCard',
	},
	{
		id: 3,
		title: 'Простота управления',
		description:
			'Автоматическая установка сервера. Интуитивное управление. Установка дополнений в 1 клик. Удобный интерфейс редактирования файлов.',
		icon: 'Io5SettingsSharp',
	},
	{
		id: 4,
		title: 'Поддержка',
		description:
			'Оперативно ответим на ваши вопросы и решим проблемы, подскажем в настройке сервера',
		icon: 'BiSupport',
	},
]
