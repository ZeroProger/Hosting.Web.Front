import { FC, useEffect, useId, useState } from 'react'
import Select, { ActionMeta, SingleValue, components } from 'react-select'

export interface IOption {
	label: string
	value: string
}

interface IPropertySelect {
	options: IOption[]
	placeholder: string
	defaultValue?: IOption
}

const Input = (inputProps: any) => (
	<components.Input {...inputProps} autoComplete="nope" aria-autocomplete="none" />
)

const PropertySelect: FC<IPropertySelect> = ({ options, placeholder, defaultValue }) => {
	const [selectedValue, setSelectedValue] = useState<IOption | null>(null)

	const handleSelect = (newValue: SingleValue<IOption>, actionMeta: ActionMeta<IOption>) => {
		setSelectedValue(newValue)
	}

	const selectId = useId()

	useEffect(() => {
		console.log(defaultValue)
	}, [])

	return (
		<Select
			options={options}
			placeholder={placeholder}
			value={selectedValue || defaultValue}
			defaultValue={defaultValue}
			id={selectId}
			instanceId={selectId}
			inputId={selectId}
			onChange={handleSelect}
			className="custom-select-container"
			classNamePrefix="custom-select"
			components={{ Input }}
		></Select>
	)
}

export default PropertySelect
