import { ReactElement } from 'react'

import ModLayout from '@/components/mod-layout/ModLayout'
import ServerLayout from '@/components/server-layout/ServerLayout'

import ServerModImages from '@/screens/server/mods/images/ServerModImages'

import { NextPageWithLayout } from '@/pages/_app'

const ModImagesPage: NextPageWithLayout = () => {
	return <ServerModImages />
}

ModImagesPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<ServerLayout>
			<ModLayout>{page}</ModLayout>
		</ServerLayout>
	)
}

export default ModImagesPage
