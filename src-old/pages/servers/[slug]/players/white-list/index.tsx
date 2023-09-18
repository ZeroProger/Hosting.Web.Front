import { ReactElement } from 'react'

import PlayersDataList from '@/components/players-data-list/PlayersDataList'
import ServerLayout from '@/components/server-layout/ServerLayout'

import { PlayersDataListType } from '@/shared/types/player.types'

import { NextPageWithLayout } from '@/pages/_app'

const WhiteListPage: NextPageWithLayout = () => {
	return (
		<PlayersDataList
			title={'Белый список'}
			addDataPlaceholder={'Имя пользователя'}
			dataType={PlayersDataListType.WhiteList}
		/>
	)
}

export default WhiteListPage

WhiteListPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}
