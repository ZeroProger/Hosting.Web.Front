import { Step } from 'react-joyride'

export const modsSteps: Step[] = [
	{
		content:
			'На данной странице собраны подборки различных популярных модификаций для вашего сервера: моды, модпаки, миры, плагины и т.д. Всё это может быть установлено в пару кликов',
		target: '#mods-compilation-step',
		disableBeacon: true,
		placement: 'auto',
		locale: { last: <strong>Дальше</strong> },
		styles: {
			options: { width: 600 },
		},
	},
]