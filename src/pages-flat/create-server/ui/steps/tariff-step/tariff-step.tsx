'use client'

import { formSchema } from '@/pages-flat/create-server/config'
import {
	$serverCreateForm,
	$serverCreateFormStep,
	nextFormStep,
	setServerCreateFormData,
} from '@/pages-flat/create-server/model'
import { ECreateServerFormStep, FormSchemaType } from '@/pages-flat/create-server/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useStore } from 'effector-react'
import { useForm } from 'react-hook-form'

export function TariffStep() {
	const formState = useStore($serverCreateForm)
	const formStep = useStore($serverCreateFormStep)

	const form = useForm<FormSchemaType>({
		resolver: zodResolver(formSchema),
		defaultValues: formState,
	})

	function onSubmit(data: FormSchemaType) {
		setServerCreateFormData(data)
		nextFormStep()
	}

	if (formStep !== ECreateServerFormStep.TARIFF) return null

	return <span>{JSON.stringify(formState)}</span>
}
