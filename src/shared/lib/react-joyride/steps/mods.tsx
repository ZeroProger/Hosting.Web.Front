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

export const modLayoutSteps: Step[] = [
	{
		content: 'Добавляем модификацию в список для установки',
		target: '#add-mod-btn-step',
		disableBeacon: true,
		placement: 'auto',
		locale: {
			next: <strong>Дальше</strong>,
			back: <strong>Назад</strong>,
		},
	},
	{
		content: 'Если модификация понравилась вам - можете добавить её в избранное',
		target: `#add-to-favorites-btn-step`,
		disableBeacon: true,
		placement: 'auto',
		locale: {
			next: <strong>Дальше</strong>,
			back: <strong>Назад</strong>,
		},
	},
	{
		content:
			'Список модификаций выбранных для установки, после того, как выберите все нужные модификации - кликните сюда и в появившемся окне нажмите кнопку "Установить"',
		target: '#mods-cart-step',
		disableBeacon: true,
		placement: 'auto',
		styles: { options: { width: 600 } },
		locale: {
			next: <strong>Дальше</strong>,
			back: <strong>Назад</strong>,
		},
	},
	{
		content: 'Также можете удалить модификацию из списка для установки',
		target: '#remove-mod-btn-step',
		disableBeacon: true,
		placement: 'auto',
		locale: {
			last: <strong>Дальше</strong>,
			back: <strong>Назад</strong>,
		},
	},
]
