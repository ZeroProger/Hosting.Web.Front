import { createEvent, createStore } from 'effector'
import { formSteps } from '../config'

import { ECreateServerFormStep, FormSchemaType } from '../types'

export const prevFormStep = createEvent()
export const nextFormStep = createEvent()
export const setFormStep = createEvent<ECreateServerFormStep>()

export const $serverCreateFormStep = createStore(ECreateServerFormStep.CHOOSE_MODE)
	.on(prevFormStep, (state) => (state > 1 ? state - 1 : state))
	.on(nextFormStep, (state) => (state < formSteps.length ? state + 1 : state))
	.on(setFormStep, (state, step) => {
		if (step >= 1 || step <= formSteps.length) {
			return step
		}
		return state
	})

export const setServerCreateFormData = createEvent<FormSchemaType>()
export const resetServerCreateFormMods = createEvent()

const defaultServerCreateForm: FormSchemaType = { playersCount: 2, mods: [] }

export const $serverCreateForm = createStore<FormSchemaType>(defaultServerCreateForm).on(
	setServerCreateFormData,
	(prevState, newState) => {
		return { ...prevState, ...newState }
	}
)
