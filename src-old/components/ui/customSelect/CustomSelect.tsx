import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useId, useState } from 'react'
import Select, { ActionMeta, SingleValue, components } from 'react-select'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { getServerModsUrl, getServerUrl, getServersUrl } from '@/config/url.config'

export interface IOption {
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
	<components.Option {...optionProps} className="custom-select__option--link">
		<Link href={getServerUrl(optionProps.value)}>{optionProps.label}</Link>
	</components.Option>
)

const CustomSelect: FC<ICustomSelect> = ({ options }) => {
	const router = useRouter()
	const { slug } = router.query
	const [selectedValue, setSelectedValue] = useState<IOption | null>(null)
	const selectId = useId()
	const server = useTypedSelector((state) => state.server.server)

	useEffect(() => {
		if (!slug) {
			if (router.asPath.includes(getServerModsUrl()))
				setSelectedValue({
					label: server?.gameServerName,
					value: server?.gameServerHash,
				} as IOption)
			else setSelectedValue(null)
		} else setSelectedValue(options.find((el) => el.value === slug) || null)
	}, [router.asPath])

	useEffect(() => {
		if (server) {
			setSelectedValue({
				label: server?.gameServerName,
				value: server?.gameServerHash,
			} as IOption)
		}
	}, [server])

	const handleChange = (newValue: SingleValue<IOption>, actionMeta: ActionMeta<IOption>) => {
		if (actionMeta.action === 'clear') {
			setSelectedValue(null)
			router.push(getServersUrl())
			return
		}

		//if (newValue) getServer({ gameServerHash: newValue?.value })
	}

	return (
		<>
			{options.length > 0 ? (
				<Select
					options={options}
					placeholder="Выберите сервер"
					noOptionsMessage={() => <span>У вас нет активных серверов</span>}
					value={selectedValue}
					isClearable
					id={selectId}
					instanceId={selectId}
					inputId={selectId}
					onChange={handleChange}
					className="custom-select-container"
					classNamePrefix="custom-select"
					components={{ Input, Option }}
				></Select>
			) : (
				<></>
			)}
		</>
	)
}

export default CustomSelect
