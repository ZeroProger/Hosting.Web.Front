import { FormElement, Input, Switch, SwitchEvent } from '@nextui-org/react'
import { ChangeEvent, FC, useEffect, useState } from 'react'

import PropertySelect, { IOption } from '@/components/ui/customSelect/PropertySelect'

import { ServerPropertyType } from '@/shared/types/server.types'

import { serverProperties } from '@/config/server-properties.config'

import styles from './ServerSettings.module.scss'

interface IServerSettings {}

const ServerSettings: FC<IServerSettings> = () => {
	const [properties, setProperties] = useState(serverProperties)

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
		<div className={styles.container}>
			<div className={styles.settings}>
				<h2 className={styles.settingsTitle}>server.properties</h2>
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
										options={property.select || []}
										value={
											{
												label:
													property.select?.find((el) => el.value === property.value)?.label || '',
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
	)
}

export default ServerSettings
