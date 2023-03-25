import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import ServerMods from '@/screens/server/mods/ServerMods'

import { NextPageWithLayout } from '@/pages/_app'

const ModsPage: NextPageWithLayout = () => {
	return <ServerMods />
}

ModsPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}

export default ModsPage