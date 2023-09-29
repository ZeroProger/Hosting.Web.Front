import { serverMainInfo } from '@/shared/$fake-data$/server.data'

export function getServerMainInfo() {
	console.log('polling serverMainInfo...')
	return serverMainInfo
}
