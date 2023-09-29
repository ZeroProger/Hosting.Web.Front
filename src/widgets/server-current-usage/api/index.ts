import { serverCurrentUsage } from '@/shared/$fake-data$/server.data'

export function getServerCurrentUsage() {
	console.log('polling serverCurrentUsage...')
	return serverCurrentUsage
}
