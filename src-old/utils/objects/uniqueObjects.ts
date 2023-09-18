export function uniqueObjectsInArray<T, Key extends keyof T>(array: T[], propertyName: Key): T[] {
	return array.filter((e, i) => array.findIndex((a) => a[propertyName] === e[propertyName]) === i)
}
