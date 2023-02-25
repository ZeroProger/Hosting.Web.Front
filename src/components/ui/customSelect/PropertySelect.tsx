import { FC, useId } from 'react'
import Select, { ActionMeta, SingleValue, components } from 'react-select'
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager'

export interface IOption {
	label: string
	value: string
}

interface IPropertySelect extends StateManagerProps {
	options: IOption[]
	onChange: (newValue: SingleValue<IOption>, actionMeta: ActionMeta<IOption>) => void
	value: IOption
}

const Input = (inputProps: any) => (
	<components.Input {...inputProps} autoComplete="nope" aria-autocomplete="none" />
)

const PropertySelect: FC<IPropertySelect> = ({
	options,
	placeholder,
	className,
	value,
	onChange,
}) => {
	const selectId = useId()

	return (
		<Select
			options={options}
			placeholder={placeholder}
			value={value}
			defaultValue={value}
			id={selectId}
			instanceId={selectId}
			inputId={selectId}
			onChange={onChange}
			className={`custom-select-container ${className}`}
			classNamePrefix="custom-select"
			components={{ Input }}
		></Select>
	)
}

export default PropertySelect
