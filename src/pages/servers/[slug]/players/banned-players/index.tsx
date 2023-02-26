import { ReactElement } from 'react'

import PlayersDataList from '@/components/players-data-list/PlayersDataList'
import ServerLayout from '@/components/server-layout/ServerLayout'

import { PlayersDataListType } from '@/shared/types/user.types'

import { NextPageWithLayout } from '@/pages/_app'

const BannedPlayersPage: NextPageWithLayout = () => {
	return (
		<PlayersDataList
			title={'Заблокированные игроки'}
			addDataPlaceholder={'Имя пользователя'}
			dataType={PlayersDataListType.BannedUsers}
		/>
	)
}

export default BannedPlayersPage

BannedPlayersPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}
