import zod from 'zod'

import { formSchema } from '../config'

export type FormSchemaType = zod.infer<typeof formSchema>

export enum ECreateServerFormModType {
	WITHOUT_MODS = 1,
	BASIC_PLUGINS = 2,
	EASY_MODS = 3,
	HARD_MODS = 4,
	WORLD_CHANGE_MODS = 5,
}

export enum ECreateServerFormStep {
	PLAYERS = 1,
	MOD_TYPES = 2,
	TARIFF = 3,
}

export type CreateServerFormModType = {
	type: ECreateServerFormModType
	title: string
	description: string
	exampleMods: string[]
}
