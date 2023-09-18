import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import Versions from '@/screens/software/versions/Versions'

import { NextPageWithLayout } from '@/pages/_app'

interface IVersionsPage {}

const VersionsPage: NextPageWithLayout<IVersionsPage> = () => {
	return <Versions />
}

VersionsPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}

export default VersionsPage
