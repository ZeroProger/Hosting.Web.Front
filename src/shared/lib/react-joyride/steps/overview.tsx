import { Step } from 'react-joyride'

export const overviewSteps: Step[] = [
	{
		content:
			'Блок с основной информацией о вашем сервере: название, IP-адрес, кол-во игроков и онлайн-статус. Также здесь расположена кнопка запуска/остановки сервера. Этот блок будет виден на всех страницах управления сервера и благодаря ему вы сможете всегда контролировать состояние вашего сервера.',
		target: '#server-header-step',
		disableBeacon: true,
		placement: 'auto',
		styles: { options: { width: 800 } },
		locale: { next: <strong>Дальше</strong>, back: <strong>Назад</strong> },
		disableScrollParentFix: true,
	},
	{
		content: 'Здесь расположена дополнительная информация о вашем сервере: ядро, версия, и т.п.',
		target: '.main-info',
		disableBeacon: true,
		placement: 'auto',
		locale: { next: <strong>Дальше</strong>, back: <strong>Назад</strong> },
	},
	{
		content:
			'Тут видны игроки находящиеся на сервере в данный момент, вы видите их роли, а также можете кикнуть или забанить их. Кнопка "Управление" переместит вас на страницу с подробным управлением игроками и их возможностями',
		target: '.active-players',
		disableBeacon: true,
		placement: 'top',
		styles: { options: { width: 600 } },
		locale: { next: <strong>Дальше</strong>, back: <strong>Назад</strong> },
	},
	{
		content:
			'Небольшая консоль для мониторинга игрового сервера, отображает события происходящие на нём, процесс запуска и ошибки, возникающие в процессе',
		target: '.mini-console',
		disableBeacon: true,
		placement: 'bottom',
		styles: { options: { width: 600 } },
		locale: { next: <strong>Дальше</strong>, back: <strong>Назад</strong> },
	},
	{
		content:
			'Информация о использовании вашим сервером ресурсов, выделенных согласно оплаченному тарифу',
		target: '.current-usage',
		disableBeacon: true,
		placement: 'top',
		styles: { options: { width: 500 } },
		locale: { last: <strong>Дальше</strong>, back: <strong>Назад</strong> },
	},
]
