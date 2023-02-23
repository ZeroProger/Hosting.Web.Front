import { useRouter } from 'next/router'
import { FC } from 'react'
import Select, { ActionMeta, SingleValue, components } from 'react-select'

import { getServerUrl } from '@/config/url.config'

interface IOption {
	label: string
	value: string
}

interface ICustomSelect {
	options: IOption[]
}

const Input = (inputProps: any) => (
	<components.Input {...inputProps} autoComplete="nope" aria-autocomplete="none" />
)

const CustomSelect: FC<ICustomSelect> = ({ options }) => {
	const router = useRouter()

	const handleSelect = (newValue: SingleValue<IOption>, actionMeta: ActionMeta<IOption>) => {
		router.push(getServerUrl(newValue?.value || ''))
	}

	return (
		<Select
			options={options}
			placeholder="Выберите сервер"
			onChange={handleSelect}
			className="custom-select-container"
			classNamePrefix="custom-select"
			components={{ Input }}
		></Select>
	)
}

export default CustomSelect
