export const getLocalStorageData = (key: string) => {
	if (typeof localStorage !== 'undefined') {
		const data = localStorage.getItem(key)

		return data ? JSON.parse(data) : null
	}

	return null
}
