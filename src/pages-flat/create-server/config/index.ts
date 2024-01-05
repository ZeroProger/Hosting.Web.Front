import zod from 'zod'

import { ECreateServerFormStep } from '../types'

export const minPlayers = 2
export const maxPlayers = 1000

export const formSchema = zod.object({
	playersCount: zod
		.number()
		.min(minPlayers, 'На сервере не может играть меньше 2 человек')
		.max(maxPlayers, 'Извините, мы пока не поддерживаем сервера с онлайном более 1000 человек'),
	mods: zod.number().array(),
})

export const formSteps = [
	ECreateServerFormStep.CHOOSE_MODE,
	ECreateServerFormStep.PLAYERS,
	ECreateServerFormStep.MODS,
	ECreateServerFormStep.PROPOSED_TARIFF,
	ECreateServerFormStep.ADVANCED_TARIFF,
]
