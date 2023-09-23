import numeral from 'numeral'

const dateOptions: Intl.DateTimeFormatOptions = {
	month: 'short',
	year: 'numeric',
	day: 'numeric',
}

export const formatModDate = (utc: string): string =>
	new Date(utc).toLocaleString('ru-RU', dateOptions)

export const formatModDownloadsCount = (downloads: number) => {
	const numeralOptions = downloads < 1000 ? '' : '0.0a'

	return numeral(downloads).format(numeralOptions).toUpperCase()
}
