'use client'

import clsx from 'clsx'
import { Save } from 'lucide-react'
import { ChangeEvent } from 'react'

import { JoyrideGuide } from '@/shared/lib/react-joyride'
import { settingsSteps } from '@/shared/lib/react-joyride/steps/settings'
import { ServerPropertyType } from '@/shared/types'
import { Button } from '@/shared/ui/button'
import { Heading } from '@/shared/ui/heading'
import { Input } from '@/shared/ui/input'
import { SkeletonList } from '@/shared/ui/skeleton'
import { Switch } from '@/shared/ui/switch'

import { useServerSettings } from '../hooks'
import styles from './styles.module.scss'

export function ServerSettings() {
	const { localSettings, isSettingsChanged, joyrideCallback, functions } = useServerSettings()

	const { handleSwitchChange, handleTextChange, handleNumberChange, handleSaveSettings } = functions

	return (
		<>
			<JoyrideGuide scrollOffset={150} callback={joyrideCallback} steps={settingsSteps} />
			<div className={styles.container}>
				<div className={styles.header}>
					<Heading className="mb-0">Настройки сервера</Heading>
					{isSettingsChanged && (
						<Button
							variant="primary"
							className="fixed bottom-4 right-4 z-header flex gap-2 text-lg px-4 animate-scaling"
							onClick={handleSaveSettings}
						>
							<Save size={24} />
							Сохранить
						</Button>
					)}
				</div>
				<div className={styles.settings} id="server-settings-step">
					<div className={styles.properties}>
						{localSettings === undefined && (
							<SkeletonList count={18} height={80} className="bg-secondary" />
						)}
						{localSettings?.map((property) => (
							<div className={styles.property} key={property.name}>
								<div className={styles.propertyInput}>
									<div className={styles.propertyLabel}>{property.label}</div>
									{property.type === ServerPropertyType.Boolean && (
										<Switch
											className="shadow-card-sm"
											checked={property.value === 'true'}
											onCheckedChange={(checked: boolean) =>
												handleSwitchChange(checked, property.name)
											}
											id={`settings-switch-${property.name}`}
										/>
									)}
									{property.type === ServerPropertyType.Number && (
										<Input
											type="number"
											value={parseInt(property.value)}
											onChange={(e: ChangeEvent<HTMLInputElement>) =>
												handleNumberChange(e, property.name)
											}
											inputMode="numeric"
											id={`settings-input-number-${property.name}`}
											className={clsx(
												styles.propertyNumber,
												'min-w-[75px] text-xl flex-grow-0 flex-shrink basis-0'
											)}
										/>
									)}
									{property.type === ServerPropertyType.String && (
										<Input
											type="text"
											value={property.value}
											onChange={(e: ChangeEvent<HTMLInputElement>) =>
												handleTextChange(e, property.name)
											}
											id={`react-input-${property.name}`}
											className="max-w-[300px] text-xl"
										/>
									)}

									{/* {property.type === ServerPropertyType.Select && (
										<PropertySelect
											options={property.select?.options || []}
											value={
												{
													label:
														property.select?.options.find((el) => el.value === property.value)
															?.label || '',
													value: property.value,
												} as IOption
											}
											onChange={(newValue, actionMeta) =>
												handleSelectChange(newValue as IOption, property.name)
											}
											className={styles.propertySelect}
											placeholder={`Выберите ${property.label.toLowerCase()}`}
										/>
									)} */}
								</div>
								<div className={styles.propertyOutput}>
									<span>
										{property.name}={property.value}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}
