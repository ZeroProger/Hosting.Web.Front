export const allPropertiesDefined = (obj: any): boolean => {
	for (let prop in obj) {
		if (obj[prop] === undefined) {
			return false
		}
	}
	return true
}
