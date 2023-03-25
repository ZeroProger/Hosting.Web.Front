import { Button, Card, Input, Popover } from '@nextui-org/react'
import Link from 'next/link'
import { FC, useEffect } from 'react'

import { Icon } from '@/components/ui/Icon'

import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import { getServerModUrl } from '@/config/url.config'

import { fetchMods, fetchModsClassesWithCategories } from '@/store/actions/mods'

interface IServerMods {}

const ServerMods: FC<IServerMods> = () => {
	const dispatch = useAppDispatch()
	const classes = useTypedSelector((state) => state.modsReducer.classes)
	const mods = useTypedSelector((state) => state.modsReducer.mods)

	useEffect(() => {
		if (mods.length === 0) {
			dispatch(
				fetchMods({
					gameId: 432,
					sortField: 2,
					sortOrder: 'desc',
					index: 0,
					pageSize: 20,
					classId: 6,
				})
			)
		}
		if (mods.length === 0) {
			dispatch(fetchModsClassesWithCategories())
		}
	}, [])

	return (
		<div>
			<div className="flex justify-around">
				<Popover placement="bottom-left">
					<Popover.Trigger>
						<Button className="btn-default">Категории</Button>
					</Popover.Trigger>
					<Popover.Content className="w-[1330px] p-4">
						<div className="flex justify-between">
							{classes.map(({ categories, className: title }) => (
								<div key={title}>
									<h1 className="text-2xl">{title}</h1>
									{categories.map(({ name, id }) => (
										<Link key={id} href={getServerModUrl(String(id))}>
											<p>{name}</p>
										</Link>
									))}
								</div>
							))}
						</div>
					</Popover.Content>
				</Popover>
				<div className="flex">
					<Input placeholder="Поиск мода для Minecraft" className="w-[1000px] mr-5" />
					<Button className="btn-error">
						<Icon name="BsSearch" />
					</Button>
				</div>
			</div>
			<div className="flex flex-wrap">
				{mods.map(({ id, name, slug, summary }) => (
					<Link key={id} href={getServerModUrl(String(id))}>
						<Card key={id}>
							<Card.Body>
								<h1>{name}</h1>
								<p>{summary}</p>
							</Card.Body>
						</Card>
					</Link>
				))}
			</div>
		</div>
	)
}

export default ServerMods
