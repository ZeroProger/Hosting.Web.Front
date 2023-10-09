'use client'

import { formSchema } from '@/pages-flat/create-server/config'
import { zodResolver } from '@hookform/resolvers/zod'
import { useStore } from 'effector-react'
import { useForm } from 'react-hook-form'
import {
	$serverCreateForm,
	$serverCreateFormStep,
	nextFormStep,
	setServerCreateFormData,
} from '../../../model'
import { ECreateServerFormStep, FormSchemaType } from '../../../types'
import styles from './styles.module.scss'

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

	if (formStep !== ECreateServerFormStep.ADVANCED_TARIFF) return null

	return <div className={styles.container}>AdvancedTariffStep</div>
}
