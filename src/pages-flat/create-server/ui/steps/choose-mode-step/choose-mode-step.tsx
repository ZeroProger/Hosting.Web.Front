'use client'

import { Button } from '@/shared/ui/button'
import { Heading } from '@/shared/ui/heading'
import { useStore } from 'effector-react'
import { $serverCreateFormStep, setFormStep } from '../../../model'
import { ECreateServerFormStep } from '../../../types'

export function ChooseModeStep() {
	const formStep = useStore($serverCreateFormStep)

	function easyModeClick() {
		setFormStep(ECreateServerFormStep.PLAYERS)
	}

	function advanceModeClick() {
		setFormStep(ECreateServerFormStep.ADVANCED_TARIFF)
	}

	if (formStep !== ECreateServerFormStep.CHOOSE_MODE) return null

	return (
		<div className="w-full max-w-lg flex flex-col items-center gap-2">
			<Heading>Помочь с выбором тарифа?</Heading>
			<div className="flex flex-col items-center justify-center gap-4">
				<Button
					variant="outline"
					onClick={easyModeClick}
					className="h-auto flex flex-col gap-2 flex-1"
				>
					<span className="text-xl font-bold">Да, мне нужна помощь с выбором</span>
					<p className="text-lg text-foreground/70">
						Мы предложим вам тариф на основе ваших потребностей: сколько игроков будет играть на
						сервере, с какими модами вы будете играть (а может без модов?).
					</p>
				</Button>
				<Button
					variant="outline"
					onClick={advanceModeClick}
					className="h-auto flex flex-col gap-2 flex-1"
				>
					<span className="text-xl font-bold">Нет, я сам выберу конфигурацию сервера</span>
					<p className="text-lg text-foreground/70">
						Не будем задавать никаких уточняющих вопросов, сразу перейдём к выбору CPU, RAM и других
						характеристик сервера.
					</p>
				</Button>
			</div>
		</div>
	)
}
