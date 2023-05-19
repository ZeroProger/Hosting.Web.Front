export const errorCatch = (error: any): string => {
	console.log('error catch api/helpers: ', error)
	return error.response && error.response.data
		? typeof error.response.data.message === 'object'
			? error.response.data.message[0]
			: error.response.data.message
		: `Ошибка${error.message ? `:${error.message}` : ''}`
}
