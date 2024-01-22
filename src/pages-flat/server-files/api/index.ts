import { axiosAuth } from '@/shared/api/auth'
import { FilesApiUrls } from '@/shared/api/urls'
import { IFileNode } from '@/shared/types'

export function getServerFiles(serverHash?: string | null, path: string = '') {
	return axiosAuth().post<{ files: IFileNode[]; error: string; success: boolean }>(
		FilesApiUrls.filesList(),
		{ gameServerHash: serverHash, path: `/usr/local/server/${path}` }
	)
}

export function getServerFileContent(serverHash?: string | null, path: string = '') {
	return axiosAuth().post<{ content: string; error: string; success: boolean }>(
		FilesApiUrls.fileContent(),
		{ gameServerHash: serverHash, path: `/usr/local/server/${path}` }
	)
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
