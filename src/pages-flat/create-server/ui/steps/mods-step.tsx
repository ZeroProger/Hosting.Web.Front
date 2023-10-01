'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useStore } from 'effector-react'
import { useForm } from 'react-hook-form'

import { Button } from '@/shared/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/shared/ui/form'

import { formSchema } from '../../config'
import {
	$serverCreateForm,
	$serverCreateFormStep,
	nextFormStep,
	resetServerCreateFormMods,
	setServerCreateFormData,
} from '../../model'
import { ECreateServerFormStep, FormSchemaType } from '../../types'
import { SelectMods } from '../select-mods'
import { $selectedMods } from '../select-mods/model'

export function ModsStep() {
	const formState = useStore($serverCreateForm)
	const formStep = useStore($serverCreateFormStep)
	const selectedMods = useStore($selectedMods)

	const form = useForm<FormSchemaType>({
		resolver: zodResolver(formSchema),
		defaultValues: formState,
	})

	function onSubmit(data: FormSchemaType) {
		console.log('submit', data)
		setServerCreateFormData(data)
		nextFormStep()
	}

	function handleWithoutModsClick() {
		console.log(form.getValues())
		resetServerCreateFormMods()
		nextFormStep()
	}

	if (formStep !== ECreateServerFormStep.MOD_TYPES) return null

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="max-w-3xl flex flex-col gap-6">
				<FormField
					control={form.control}
					name="mods"
					render={({ field }) => (
						<FormItem className="space-y-0 flex flex-col items-center gap-6">
							<FormLabel className="text-3xl text-center">
								Какие модификации планируете установить на сервер?
							</FormLabel>
							<FormControl>
								<SelectMods />
							</FormControl>
						</FormItem>
					)}
				/>
				<div className="flex gap-2 w-full justify-center">
					<Button type="submit" variant="primary" className="text-2xl w-max px-8">
						Далее
					</Button>
				</div>
			</form>
		</Form>
	)
}
