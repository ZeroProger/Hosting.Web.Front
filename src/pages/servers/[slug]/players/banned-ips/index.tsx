import { ReactElement } from 'react'

import PlayersDataList from '@/components/players-data-list/PlayersDataList'
import ServerLayout from '@/components/server-layout/ServerLayout'

import { PlayersDataListType } from '@/shared/types/user.types'

import { NextPageWithLayout } from '@/pages/_app'

const BannedIpsPage: NextPageWithLayout = () => {
	return (
		<PlayersDataList
			title={'Заблокированные IP адреса'}
			addDataPlaceholder={'IP адрес пользователя'}
			dataType={PlayersDataListType.BannedIps}
		/>
	)
}

export default BannedIpsPage

BannedIpsPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}
