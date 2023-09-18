import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import Version from '@/screens/software/version/Version'

import { NextPageWithLayout } from '@/pages/_app'

const VersionPage: NextPageWithLayout = () => {
	return <Version />
}

VersionPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}

export default VersionPage
