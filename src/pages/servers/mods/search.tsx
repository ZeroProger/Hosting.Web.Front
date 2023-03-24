import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import { NextPageWithLayout } from '@/pages/_app'

const SearchPage: NextPageWithLayout = () => {
	return <div>Список модов с подробной сортировкой</div>
}

export default SearchPage

SearchPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}
