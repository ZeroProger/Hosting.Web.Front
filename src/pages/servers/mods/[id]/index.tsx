import { ReactElement } from 'react'

import ModLayout from '@/components/mod-layout/ModLayout'
import ServerLayout from '@/components/server-layout/ServerLayout'

import ServerModDescription from '@/screens/server/mods/description/ServerModDescription'

import { NextPageWithLayout } from '@/pages/_app'

const ModDescriptionPage: NextPageWithLayout = () => {
	return <ServerModDescription />
}

ModDescriptionPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<ServerLayout>
			<ModLayout>{page}</ModLayout>
		</ServerLayout>
	)
}

export default ModDescriptionPage
