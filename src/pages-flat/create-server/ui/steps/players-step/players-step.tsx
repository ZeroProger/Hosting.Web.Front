'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useStore } from 'effector-react'
import { useForm } from 'react-hook-form'

import { Button } from '@/shared/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'

import { formSchema } from '../../../config'
import {
	$serverCreateForm,
	$serverCreateFormStep,
	nextFormStep,
	prevFormStep,
	setServerCreateFormData,
} from '../../../model'
import { ECreateServerFormStep, FormSchemaType } from '../../../types'

export function PlayersStep() {
	const formState = useStore($serverCreateForm)
	const formStep = useStore($serverCreateFormStep)

	const form = useForm<FormSchemaType>({
		resolver: zodResolver(formSchema),
		defaultValues: formState,
	})

	function onSubmit(data: FormSchemaType) {
		console.log(formStep, data)
		setServerCreateFormData(data)
		nextFormStep()
	}

	function handlePrevStepClick() {
		prevFormStep()
	}

	if (formStep !== ECreateServerFormStep.PLAYERS) return null

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-2xl flex flex-col gap-6">
				<FormField
					control={form.control}
					name="playersCount"
					render={({ field }) => (
						<FormItem className="space-y-0 flex flex-col items-center gap-6">
							<FormLabel className="text-2xl sm:text-3xl text-center">
								Сколько игроков будет играть на сервере?
							</FormLabel>
							<FormControl>
								<Input
									{...field}
									type="number"
									placeholder="Кол-во игроков"
									className="text-xl sm:text-2xl w-auto self-center"
									onChange={(e) => field.onChange(parseInt(e.target.value))}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
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
						Далее
					</Button>
				</div>
			</form>
		</Form>
	)
}
