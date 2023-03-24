import { Button, Card, Input, Popover } from '@nextui-org/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'
import { Icon } from '@/components/ui/Icon'

import { IClassOfCategories, IMod } from '@/shared/types/curseforge.types'

import { CurseForgeService } from '@/services/curseforge.service'

import { getServerModUrl } from '@/config/url.config'

import { NextPageWithLayout } from '@/pages/_app'

interface ModsPageProps {
	classes: IClassOfCategories[]
	mods: IMod[]
}

const ModsPage: NextPageWithLayout<ModsPageProps> = ({ classes, mods }) => {
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

export default ModsPage

ModsPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const {
			data: { data: classes },
		} = await CurseForgeService.getClassesOfModsCategories()
		const {
			data: { data: mods },
		} = await CurseForgeService.getMods({
			gameId: 432,
			sortField: 2,
			sortOrder: 'desc',
			classId: 6,
			index: 0,
			pageSize: 20,
		})
		return {
			props: {
				classes,
				mods,
			},
			revalidate: 120,
		}
	} catch (error) {
		console.log(error)
		return {
			notFound: true,
		}
	}
}
