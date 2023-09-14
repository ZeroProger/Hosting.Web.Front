import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import ServerModsSearch from '@/screens/server/mods/ServerModsSearch'

import { NextPageWithLayout } from '@/pages/_app'

const SearchPage: NextPageWithLayout = () => {
	return <ServerModsSearch />
}

SearchPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}

export default SearchPage
