import { serverCurrentUsage } from '@/shared/$fake-data$/server.data'

export function getServerCurrentUsage() {
	return serverCurrentUsage.map((item) => {
		const max = item.value + item.value * 0.05
		const min = item.value - item.value * 0.05
		const randValue = Math.random() * (max - min) + min

		return {
			...item,
			value: Number(randValue.toFixed(1)),
		}
	})
}
