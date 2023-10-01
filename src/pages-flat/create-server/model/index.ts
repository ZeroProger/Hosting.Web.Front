import { createEvent, createStore } from 'effector'

import { FormSchemaType } from '../types'

export const prevFormStep = createEvent()
export const nextFormStep = createEvent()

export const setServerCreateFormData = createEvent<FormSchemaType>()
export const $serverCreateFormStep = createStore(1)
	.on(prevFormStep, (state) => (state > 1 ? state - 1 : state))
	.on(nextFormStep, (state) => (state < 3 ? state + 1 : state))

export const resetServerCreateFormMods = createEvent()

const defaultFormState: FormSchemaType = { playersCount: 2, mods: [] }

export const $serverCreateForm = createStore<FormSchemaType>(defaultFormState)
	.on(setServerCreateFormData, (_, newState) => newState)
	.on(resetServerCreateFormMods, (state) => {
		return { ...state, mods: [] }
	})

$serverCreateForm.watch((state) => console.log('formStateEffector:', state))
