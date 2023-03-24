import { GetStaticPaths, GetStaticProps } from 'next'
import { ReactElement } from 'react'

import ModLayout from '@/components/mod-layout/ModLayout'
import ServerLayout from '@/components/server-layout/ServerLayout'

import ServerMod from '@/screens/server/mods/ServerMod'

import { IMod } from '@/shared/types/curseforge.types'

import { CurseForgeService } from '@/services/curseforge.service'

import { NextPageWithLayout } from '@/pages/_app'

interface IModPage {
	description: string
}

const ModPage: NextPageWithLayout<IModPage> = ({ description }) => {
	return <div className="description" dangerouslySetInnerHTML={{ __html: description }}></div>
}

export default ModPage

ModPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<ServerLayout>
			<ModLayout>{page}</ModLayout>
		</ServerLayout>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params?.id

	try {
		const {
			data: { data: description },
		} = await CurseForgeService.getModFullDescription(+id!)

		return {
			props: { description },
			revalidate: 120,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
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
		const paths = mods.map(({ id }) => ({
			params: {
				id: `${id}`,
			},
		}))

		return {
			paths,
			fallback: 'blocking',
		}
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
	}
}
