import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import ServerMod from '@/screens/server/mods/ServerMod'

import { NextPageWithLayout } from '@/pages/_app'

const ModPage: NextPageWithLayout = () => {
	return <ServerMod />
}

export default ModPage

ModPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}
