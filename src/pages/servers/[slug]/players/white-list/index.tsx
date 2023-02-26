import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import { NextPageWithLayout } from '@/pages/_app'

const WhiteListPage: NextPageWithLayout = () => {
	return <div>WhiteListPage</div>
}

export default WhiteListPage

WhiteListPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}
