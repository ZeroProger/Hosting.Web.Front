export const allPropertiesNotNull = (obj: any, exceptionProperties: string[]): boolean => {
	for (let prop in obj) {
		if (exceptionProperties.find((item) => item === prop) === undefined) {
			if (obj[prop] === null) {
				return false
			}
		}
	}
	return true
}
