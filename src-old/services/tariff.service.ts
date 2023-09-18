import { ITariffsResponse } from '@/shared/types/requests/server-requests.types'
import { IGameTariffs, ITariff } from '@/shared/types/tariff.types'

import { getTariffByGameIdUrl, getTariffsGroupedByGamesUrl } from '@/config/api/tariffs-api.config'

import { axiosClassic } from '@/api/interceptors'

export const TariffService = {
	getTariffsGroupedByGames() {
		return axiosClassic.get<ITariffsResponse>(getTariffsGroupedByGamesUrl())
	},

	getTariffById(id: number) {
		return axiosClassic.get<IGameTariffs>(getTariffByGameIdUrl(id))
	},

	createTariff(data: ITariff) {
		return null
	},

	deleteTariff(id: number) {
		return null
	},

	changeTariff(id: number, data: Partial<Omit<ITariff, 'id'>>) {
		return null
	},
}
