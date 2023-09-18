const dateOptions: Intl.DateTimeFormatOptions = {
	month: 'short',
	year: 'numeric',
	day: 'numeric',
}

export const russifyUTC = (utc: string): string =>
	new Date(utc).toLocaleString('ru-RU', dateOptions)
