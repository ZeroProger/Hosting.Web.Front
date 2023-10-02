import { Step } from 'react-joyride'

export const settingsSteps: Step[] = [
	{
		content:
			'На данной странице вы можете управлять основным конфигурационным файлом вашего игрового сервера, в зависимости от игры он будет отличаться',
		target: '#server-settings-step',
		disableBeacon: true,
		placement: 'auto',
		styles: { options: { width: 600 } },
		locale: { last: <strong>Завершить</strong> },
	},
]