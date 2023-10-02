export const getLocalStorageData = (key: string) => {
	if (typeof localStorage !== 'undefined') {
		const data = localStorage.getItem(key)

		if (!data) return null

		try {
			const result = JSON.parse(data)

			return result
		} catch (e) {
			return data
		}
	}

	return null
}
