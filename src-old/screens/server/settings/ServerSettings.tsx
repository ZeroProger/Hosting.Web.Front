import { FormElement, Input, Switch, SwitchEvent } from '@nextui-org/react'
import { serverProperties } from 'fakeData/server.data'
import { useRouter } from 'next/router'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import Joyride from 'react-joyride'

import PropertySelect, { IOption } from '@/components/ui/customSelect/PropertySelect'
import Heading from '@/components/ui/heading/Heading'

import useLocalStorage from '@/hooks/useLocalStorage'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import { ServerPropertyType } from '@/shared/types/server.types'

import Meta from '@/utils/meta/Meta'

import { joyrideStylesOptions, joyrideStylesTooltip } from '@/config/constants'
import { getServerOverviewUrl } from '@/config/url.config'

import styles from './ServerSettings.module.scss'

interface IServerSettings {}

const ServerSettings: FC<IServerSettings> = () => {
	const router = useRouter()
	const [properties, setProperties] = useState(serverProperties)
	const [isGuideCompleted, setIsGuideCompleted] = useLocalStorage('isGuideCompleted', false)
	const server = useTypedSelector((state) => state.server.server)

	const handleSwitchChange = (event: SwitchEvent, name: string) => {
		let updatedProperties = properties.map((property) => {
			if (property.name == name) {
				return { ...property, value: String(event.target.checked) }
			}
			return property
		})

		setProperties(updatedProperties)
	}

	const handleTextChange = (
		event: ChangeEvent<FormElement>,
		name: string,
		defaultValue: string
	) => {
		let updatedProperties = properties.map((property) => {
			if (property.name == name) {
				return { ...property, value: String(event.target.value) || defaultValue }
			}
			return property
		})

		setProperties(updatedProperties)
	}

	const handleSelectChange = (newValue: IOption, name: string) => {
		let updatedProperties = properties.map((property) => {
			if (property.name == name) {
				return { ...property, value: String(newValue?.value) || property.value }
			}
			return property
		})

		setProperties(updatedProperties)
	}

	useEffect(() => {
		//#TODO: при каждом изменении любого поля - отсылаем запрос на сервер, возможно это глупо и стоить добавить кнопку сохранить изменения, которая показывается только тогда, когда список свойств отличается от изначального
	}, [properties])

	return (
		<>
			<Joyride
				run={!isGuideCompleted}
				continuous
				hideCloseButton
				hideBackButton
				disableOverlayClose
				scrollOffset={150}
				callback={({ status }) => {
					if (status === 'finished') {
						router.push(getServerOverviewUrl(server?.gameServerHash!))
						setIsGuideCompleted(true)
					}
				}}
				steps={[
					{
						content:
							'На данной странице вы можете управлять основным конфигурационным файлом вашего игрового сервера, в зависимости от игры он будет отличаться',
						target: '#server-settings-step',
						disableBeacon: true,
						placement: 'auto',
						styles: { options: { width: 600 } },
						locale: { last: <strong>Завершить</strong> },
					},
				]}
				styles={{ options: joyrideStylesOptions, tooltip: joyrideStylesTooltip }}
			/>
			<Meta title="Настройки сервера">
				<div className={styles.container}>
					<Heading title="server.properties" />
					<div className={styles.settings} id="server-settings-step">
						<div className={styles.properties}>
							{properties.map((property, index) => (
								<div className={styles.property} key={property.name}>
									<div className={styles.propertyInput}>
										<div className={styles.propertyLabel}>{property.label}</div>
										{property.type === ServerPropertyType.Boolean && (
											<Switch
												className={styles.propertyBoolean}
												initialChecked={property.value === 'true'}
												onChange={(ev: SwitchEvent) => handleSwitchChange(ev, property.name)}
												id={`react-input-${property.name}`}
											/>
										)}
										{property.type === ServerPropertyType.Number && (
											<Input
												type="number"
												value={parseInt(property.value)}
												onChange={(e: ChangeEvent<FormElement>) =>
													handleTextChange(e, property.name, '0')
												}
												width="100px"
												inputMode="numeric"
												animated={false}
												id={`react-input-${property.name}`}
												className={styles.propertyNumber}
											/>
										)}
										{property.type === ServerPropertyType.String && (
											<Input
												type="text"
												value={property.value}
												onChange={(e: ChangeEvent<FormElement>) =>
													handleTextChange(e, property.name, '')
												}
												animated={false}
												id={`react-input-${property.name}`}
												className={styles.propertyString}
											/>
										)}

										{property.type === ServerPropertyType.Select && (
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
										)}
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
			</Meta>
		</>
	)
}

export default ServerSettings
