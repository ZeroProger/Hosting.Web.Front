import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import Select, { ActionMeta, SingleValue, components } from 'react-select'

import { getServerUrl, getServersUrl } from '@/config/url.config'

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
	const { slug } = router.query
	const [selectedValue, setSelectedValue] = useState<IOption | null>(null)

	const handleSelect = (newValue: SingleValue<IOption>, actionMeta: ActionMeta<IOption>) => {
		router.push(newValue ? getServerUrl(`${newValue.value}`) : getServersUrl())
	}

	useEffect(() => {
		setSelectedValue(options.find((el) => el.value === slug) || null)
	}, [slug])

	return (
		<Select
			options={options}
			placeholder="Выберите сервер"
			value={selectedValue}
			isClearable
			onChange={handleSelect}
			className="custom-select-container"
			classNamePrefix="custom-select"
			components={{ Input }}
		></Select>
	)
}

export default CustomSelect
