import { ReactElement } from 'react'

import ModLayout from '@/components/mod-layout/ModLayout'
import ServerLayout from '@/components/server-layout/ServerLayout'

import ServerModFiles from '@/screens/server/mods/files/ServerModFiles'

import { NextPageWithLayout } from '@/pages/_app'

const ModFilesPage: NextPageWithLayout = () => {
	return <ServerModFiles />
}

ModFilesPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<ServerLayout>
			<ModLayout>{page}</ModLayout>
		</ServerLayout>
	)
}

export default ModFilesPage
