'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useStore } from 'effector-react'
import { useForm } from 'react-hook-form'

import { Form } from '@/shared/ui/form'

import {
	$serverCreateForm,
	$serverCreateFormStep,
	nextFormStep,
	prevFormStep,
	setServerCreateFormData,
} from '../../../model'
import { ECreateServerFormStep, FormSchemaType } from '../../../types'

import { formSchema } from '@/pages-flat/create-server/config'
import { Button } from '@/shared/ui/button'

export function AdvancedTariffStep() {
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

	function handlePrevStepClick() {
		prevFormStep()
	}

	if (formStep !== ECreateServerFormStep.ADVANCED_TARIFF) return null

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full max-w-2xl flex flex-col gap-6"
			>
				<div className="flex flex-col-reverse xs:flex-row justify-center items-center gap-4">
					<Button
						type="button"
						variant="outline"
						className="text-xl sm:text-2xl w-max px-8"
						onClick={handlePrevStepClick}
					>
						Назад
					</Button>
					<Button type="submit" variant="primary" className="text-xl sm:text-2xl w-max px-8">
						Создать
					</Button>
				</div>
			</form>
		</Form>
	)
}
