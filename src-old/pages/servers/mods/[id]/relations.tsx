import { ReactElement } from 'react'

import ModLayout from '@/components/mod-layout/ModLayout'
import ServerLayout from '@/components/server-layout/ServerLayout'

import ServerModRelations from '@/screens/server/mods/relations/ServerModRelations'

import { NextPageWithLayout } from '@/pages/_app'

const ModRelationsPage: NextPageWithLayout = () => {
	return <ServerModRelations />
}

ModRelationsPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<ServerLayout>
			<ModLayout>{page}</ModLayout>
		</ServerLayout>
	)
}

export default ModRelationsPage
