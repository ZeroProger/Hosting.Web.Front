import { filesTree as fileNodes } from '@/shared/$fake-data$/server.data'

export function getServerFiles(serverHash?: string | null, path: string = '') {
	//return axiosAuth().post(ServerApiUrls.files(), { serverHash, path })
	return fileNodes.sort((a, b) => a.name!.localeCompare(b.name!))
}

export function getServerFileContent(serverHash?: string | null, path: string = '') {
	return `Контент файла по пути ${path}. Пришел с бэка`
}

// export function getNodeFiles(path: string): IFileNode[] {
// 	if (path === '') return filesTree

// 	return filesTree
// }

// function deepSearch<Key extends keyof IFileNode>(
// 	object: IFileNode | IFileNode[],
// 	key: Key,
// 	predicate: (k: Key, v: IFileNode[Key]) => boolean
// ): IFileNode | undefined {
// 	if (Array.isArray(object)) {
// 		for (const item of object) {
// 			const result = deepSearch(item, key, predicate)
// 			if (result) {
// 				return result
// 			}
// 		}
// 	} else if (typeof object === 'object' && object !== null) {
// 		if (predicate(key, object[key])) {
// 			return object
// 		}

// 		const children = object.children
// 		if (children) {
// 			const result = deepSearch(children, key, predicate)
// 			if (result) {
// 				return result
// 			}
// 		}
// 	}

// 	return undefined
// }
