'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useStore } from 'effector-react'
import { X } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { useClickOutside } from '@/shared/hooks'
import { Button } from '@/shared/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { SubHeading } from '@/shared/ui/subheading'

import { formSchema } from '../../../config'
import {
	$serverCreateForm,
	$serverCreateFormStep,
	nextFormStep,
	prevFormStep,
	resetServerCreateFormMods,
	setFormStep,
	setServerCreateFormData,
} from '../../../model'
import { ECreateServerFormStep, FormSchemaType } from '../../../types'

import { useSelectMods } from './hooks'
import styles from './styles.module.scss'

export function ModsStep() {
	const formState = useStore($serverCreateForm)
	const formStep = useStore($serverCreateFormStep)

	const { mods, selectedMods, searchTerm, showList, containerRef, functions } = useSelectMods()

	const { handleClickOutside, handleSearch, handleInputFocus, handleToggleModSelection } = functions

	useClickOutside(containerRef, handleClickOutside)

	const form = useForm<FormSchemaType>({
		resolver: zodResolver(formSchema),
		defaultValues: formState,
	})

	function onSubmit(data: FormSchemaType) {
		form.setValue(
			'mods',
			selectedMods.map((mod) => mod.id)
		)
		form.setValue('playersCount', formState.playersCount)
		setServerCreateFormData(form.getValues())
		setFormStep(ECreateServerFormStep.SERVER_NAME)
	}

	function handleWithoutModsClick() {
		resetServerCreateFormMods()
		nextFormStep()
	}

	function handlePrevStepClick() {
		prevFormStep()
	}

	if (formStep !== ECreateServerFormStep.MODS) return null

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="max-w-3xl flex flex-col gap-6">
				<FormField
					control={form.control}
					name="mods"
					render={({ field }) => (
						<FormItem className="space-y-0 flex flex-col items-center gap-6">
							<FormLabel className="text-2xl sm:text-3xl text-center">
								Какие модификации планируете установить на сервер?
							</FormLabel>
							<FormControl>
								<div className={styles.selectMods}>
									<div className={styles.searchMods} ref={containerRef}>
										<Input
											type="search"
											placeholder="Поиск модов"
											className="w-full text-xl px-6 border-border border-2 text-white bg-card focus:border-primary h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
											value={searchTerm}
											onChange={handleSearch}
											onFocus={handleInputFocus}
										/>
										{mods && mods.length > 0 && showList && (
											<div className={styles.mods}>
												{mods.map((mod) => (
													<Button
														key={mod.id}
														variant={
															selectedMods.find((m) => m.id === mod.id) ? 'primary' : 'outline'
														}
														className="h-auto py-1 px-2 text-sm inline flex-auto"
														onClick={() => handleToggleModSelection(mod)}
													>
														{mod.name}
													</Button>
												))}
											</div>
										)}
									</div>
									{selectedMods && selectedMods.length > 0 && (
										<div className={styles.selectedMods}>
											<SubHeading className="text-xl">Выбранные моды</SubHeading>
											<div className={styles.selectedList}>
												{selectedMods.map((mod) => (
													<span
														key={mod.id}
														className="bg-primary text-primary-foreground rounded-layout h-auto py-1 px-2 text-sm font-medium inline-flex flex-auto items-center justify-center gap-2 leading-[normal]"
													>
														{mod.name}
														<Button
															size="icon"
															variant="ghost"
															className="p-0 hover:bg-destructive"
															onClick={() => handleToggleModSelection(mod)}
														>
															<X size={17} strokeWidth={2.5} />
														</Button>
													</span>
												))}
											</div>
										</div>
									)}
								</div>
							</FormControl>
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
