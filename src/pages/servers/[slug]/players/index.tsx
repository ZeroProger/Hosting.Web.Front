import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import Players from '@/screens/players/Players'

import { NextPageWithLayout } from '@/pages/_app'

const PlayersPage: NextPageWithLayout = () => {
	return <Players />
}

export default PlayersPage

PlayersPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}
