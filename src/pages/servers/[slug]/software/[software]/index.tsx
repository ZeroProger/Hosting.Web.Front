import { GetStaticPaths, GetStaticProps } from 'next'
import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import Versions from '@/screens/software/versions/Versions'

import { ICForgeMinecraftVersion, ICForgeModloaderVersion } from '@/shared/types/curseforge.types'

import { CurseForgeService } from '@/services/curseforge.service'

import { NextPageWithLayout } from '@/pages/_app'

interface IVersionsPage {
	versions: { data: ICForgeMinecraftVersion[] } | { data: ICForgeModloaderVersion[] }
	type: string
}

const VersionsPage: NextPageWithLayout<IVersionsPage> = ({ versions, type }) => {
	return <Versions versions={versions} type={type} />
}

VersionsPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: versions } = await CurseForgeService.getSoftwaresVersions(
			String(params?.software)
		)

		return {
			props: {
				versions: versions,
				type: params?.software,
			},
			revalidate: 120,
		}
	} catch (error) {
		console.error(error)
		return {
			notFound: true,
		}
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const paths = [
			{ params: { slug: 'sky-block', software: 'vanila' } },
			{ params: { slug: 'sky-block', software: 'forge' } },
			{ params: { slug: 'sky-block', software: 'fabric' } },
			{ params: { slug: 'classic-vanila', software: 'vanila' } },
			{ params: { slug: 'classic-vanila', software: 'forge' } },
			{ params: { slug: 'classic-vanila', software: 'fabric' } },
			{ params: { slug: 'industrial-craft', software: 'vanila' } },
			{ params: { slug: 'industrial-craft', software: 'forge' } },
			{ params: { slug: 'industrial-craft', software: 'fabric' } },
		]

		return {
			paths: paths,
			fallback: 'blocking',
		}
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export default VersionsPage
