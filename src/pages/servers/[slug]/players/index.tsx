import ServerLayout from '@/components/server-layout/ServerLayout'
import { NextPageWithLayout } from '@/pages/_app'
import { NextPage } from 'next'
import { ReactElement } from 'react'

const PlayersPage: NextPageWithLayout = () => {
	return <div>PlayersPage</div>
}

export default PlayersPage

PlayersPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}