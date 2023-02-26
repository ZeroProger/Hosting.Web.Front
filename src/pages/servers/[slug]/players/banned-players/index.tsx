import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import { NextPageWithLayout } from '@/pages/_app'

const BannedPlayersPage: NextPageWithLayout = () => {
	return <div>BannedPlayersPage</div>
}

export default BannedPlayersPage

BannedPlayersPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}
