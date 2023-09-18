import numeral from 'numeral'

import { ITariff } from '@/shared/types/tariff.types'

export const formatMemory = (megaBytes: number): string => {
	const data = numeral(megaBytes * 1024 * 1024)

	return data.format('0 ib').replace('GiB', 'GB').replace('MiB', 'MB').replace('KiB', 'KB')
}

export const formatMemoryBytes = (bytes: number): string => {
	const data = numeral(bytes)

	return data.format('0 ib').replace('GiB', 'GB').replace('MiB', 'MB').replace('KiB', 'KB')
}

export const getCpuCoresCount = (percentage: number): string => {
	return (percentage / 100).toFixed(1)
}

export const formatCpuFrequency = (frequency: number): string => {
	return (frequency / 1000).toFixed(1).concat(' GHz')
}

export const getTariffPriceString = (tariff: ITariff): string => {
	return tariff.isPricePerPlayer
		? `₽${tariff.monthPrice} / слот (в месяц)`
		: `₽${tariff.monthPrice} / месяц`
}

export const formatPrice = (price: number): string => {
	return numeral(price).format('$ 0,000').replace('$', '₽')
}
