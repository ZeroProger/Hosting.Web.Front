import { ReactElement } from 'react'

import PlayersDataList from '@/components/players-data-list/PlayersDataList'
import ServerLayout from '@/components/server-layout/ServerLayout'

import { PlayersDataListType } from '@/shared/types/user.types'

import { NextPageWithLayout } from '@/pages/_app'

const OperatorsPage: NextPageWithLayout = () => {
	return (
		<PlayersDataList
			title={'Операторы'}
			addDataPlaceholder={'Имя пользователя'}
			dataType={PlayersDataListType.Operators}
		/>
	)
}

export default OperatorsPage

OperatorsPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}
