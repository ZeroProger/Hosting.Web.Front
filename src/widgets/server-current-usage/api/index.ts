import { serverCurrentUsage } from '@/shared/$fake-data$/server.data'

export function getServerCurrentUsage() {
	console.log('polling serverCurrentUsage...')

	return serverCurrentUsage.map((item) => {
		const max = item.maxValue
		const randValue = Math.random() * max

		return {
			...item,
			value: Number(randValue.toFixed(1)),
		}
	})
}
