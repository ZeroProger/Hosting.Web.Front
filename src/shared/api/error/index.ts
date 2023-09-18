export const errorCatch = (error: any): string => {
	return error.response && error.response.data
		? typeof error.response.data.message === 'object'
			? error.response.data.message[0]
			: error.response.data.message
		: `Ошибка${error.message ? `:${error.message}` : ''}`
}
