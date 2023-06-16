export function deepSearch(object: any, key: any, predicate: (k: any, v: any) => boolean): any {
	if (object.hasOwnProperty(key) && predicate(key, object[key]) === true) return object

	for (let i = 0; i < Object.keys(object).length; i++) {
		let value = object[Object.keys(object)[i]]
		if (typeof value === 'object' && value != null) {
			let o = deepSearch(object[Object.keys(object)[i]], key, predicate)
			if (o != null) return o
		}
	}
	return null
}
