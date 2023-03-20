import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useId, useState } from 'react'
import Select, { components } from 'react-select'

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

const Option = (optionProps: any) => (
	<components.Option {...optionProps}>
		<Link href={getServerUrl(optionProps.value)}>{optionProps.label}</Link>
	</components.Option>
)

const CustomSelect: FC<ICustomSelect> = ({ options }) => {
	const router = useRouter()
	const { slug } = router.query
	const [selectedValue, setSelectedValue] = useState<IOption | null>(null)
	const selectId = useId()

	useEffect(() => {
		setSelectedValue(options.find((el) => el.value === slug) || null)
	}, [slug])

	return (
		<Select
			options={options}
			placeholder="Выберите сервер"
			value={selectedValue}
			isClearable
			id={selectId}
			instanceId={selectId}
			inputId={selectId}
			className="custom-select-container"
			classNamePrefix="custom-select"
			components={{ Input, Option }}
		></Select>
	)
}

export default CustomSelect
