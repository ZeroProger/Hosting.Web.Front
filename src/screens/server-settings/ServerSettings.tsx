import { Input, Switch } from '@nextui-org/react'
import { FC } from 'react'

import PropertySelect, { IOption } from '@/components/ui/customSelect/PropertySelect'

import { ServerPropertyType } from '@/shared/types/server.types'

import { serverProperties } from '@/config/server-properties.config'

import styles from './ServerSettings.module.scss'

interface IServerSettings {}

const ServerSettings: FC<IServerSettings> = () => {
	return (
		<div className={styles.container}>
			<div className={styles.settings}>
				<h2 className={styles.settingsTitle}>server.properties</h2>
				<div className={styles.properties}>
					{serverProperties.map((property) => (
						<div className={styles.property} key={property.name}>
							<div className={styles.propertyInput}>
								<div className={styles.propertyLabel}>{property.label}</div>
								{property.type === ServerPropertyType.Boolean && (
									<Switch
										className={styles.propertyBoolean}
										initialChecked={property.value === 'true'}
										id={`react-input-${property.name}`}
									/>
								)}
								{property.type === ServerPropertyType.Number && (
									<Input
										type="number"
										value={parseInt(property.value)}
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
										fullWidth
										animated={false}
										id={`react-input-${property.name}`}
										className={styles.propertyString}
									/>
								)}

								{property.type === ServerPropertyType.Select && (
									<PropertySelect
										options={property.select || []}
										defaultValue={
											{
												label:
													property.select?.find((el) => el.value === property.value)?.label || '',
												value: property.value,
											} as IOption
										}
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
