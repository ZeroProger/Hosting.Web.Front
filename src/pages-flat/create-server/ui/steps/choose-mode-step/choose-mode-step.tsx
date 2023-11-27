'use client'

import { Button } from '@/shared/ui/button'
import { Heading } from '@/shared/ui/heading'
import { useStore } from 'effector-react'
import { $serverCreateFormStep, setFormStep } from '../../../model'
import { ECreateServerFormStep } from '../../../types'
import styles from './styles.module.scss'

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
		<div className={styles.container}>
			<Heading>Помочь с выбором тарифа?</Heading>
			<div className={styles.buttons}>
				<Button
					variant="outline"
					onClick={easyModeClick}
					className="h-auto flex flex-col gap-2 hover:border-primary"
				>
					<span className={styles.title}>Да, мне нужна помощь с выбором</span>
					<p className={styles.description}>
						Мы предложим вам тариф на основе ваших потребностей: сколько игроков будет играть на
						сервере, с какими модами вы будете играть (а может без модов?).
					</p>
				</Button>
				<Button variant="outline" onClick={advanceModeClick} className="h-auto flex flex-col gap-2">
					<span className={styles.title}>Нет, я сам выберу конфигурацию сервера</span>
					<p className={styles.description}>
						Не будем задавать никаких уточняющих вопросов, сразу перейдём к выбору CPU, RAM и других
						характеристик сервера.
					</p>
				</Button>
			</div>
		</div>
	)
}
