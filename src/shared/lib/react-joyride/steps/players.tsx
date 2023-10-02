import { Step } from 'react-joyride'

export const playersCategorySteps: Step[] = [
	{
		content: 'Введите ник игрока или его IP-адрес и нажмите добавить.',
		target: '#add-player-step',
		disableBeacon: true,
		placement: 'auto',
		locale: { next: <strong>Дальше</strong> },
	},
	{
		content: 'Нажав на эту кнопку вы удалите игрока из соответствующей категории',
		target: '.remove-player-step',
		disableBeacon: true,
		placement: 'auto',
		locale: { last: <strong>Дальше</strong> },
	},
]

export const playersCategoriesSteps: Step[] = [
	{
		content: (
			<div>
				Здесь вы можете управлять вашими игроками: внести в белый список, выдать или забрать статус
				оператора сервера, забанить/разбанить по нику или IP-адресу
			</div>
		),
		styles: { options: { width: 600 } },
		target: '#server-players-step',
		disableBeacon: true,
		placement: 'auto',
		locale: { last: <strong>Дальше</strong> },
	},
]
