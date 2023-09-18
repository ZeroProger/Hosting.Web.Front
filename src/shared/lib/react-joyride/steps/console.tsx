import { Step } from 'react-joyride'

export const consoleSteps: Step[] = [
	{
		content:
			'Здесь вы можете следить за состоянием вашего игрового сервера и управлять им, вводя в консоль внутриигровые команды, они будут применены в игре и результат будет отображен в консоли',
		target: '#server-console-step',
		disableBeacon: true,
		placement: 'auto',
		locale: { next: <strong>Дальше</strong> },
		styles: { options: { width: 800 } },
	},
	{
		content:
			'Здесь вы можете посмотреть полный файл с информацией о запуске, работе и ошибках вашего сервера',
		target: '#server-logs-step',
		disableBeacon: true,
		placement: 'auto',
		styles: { options: { width: 500 } },
		locale: { last: <strong>Дальше</strong> },
	},
]
