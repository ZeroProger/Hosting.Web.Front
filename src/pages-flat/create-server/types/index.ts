import zod from 'zod'

import { formSchema } from '../config'

export type FormSchemaType = zod.infer<typeof formSchema>

export enum ECreateServerFormStep {
	CHOOSE_MODE = 1,
	PLAYERS = 2,
	MODS = 3,
	PROPOSED_TARIFF = 4,
	ADVANCED_TARIFF = 5,
	SERVER_NAME = 6
}
