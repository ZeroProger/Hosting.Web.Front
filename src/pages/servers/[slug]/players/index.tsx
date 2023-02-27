import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import ServerPlayers from '@/screens/server-players/ServerPlayers'

import { NextPageWithLayout } from '@/pages/_app'

const PlayersPage: NextPageWithLayout = () => {
	return <ServerPlayers />
}

export default PlayersPage

PlayersPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}
