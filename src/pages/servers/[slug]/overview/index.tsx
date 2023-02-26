import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import { NextPageWithLayout } from '@/pages/_app'

const OverviewPage: NextPageWithLayout = () => {
	return <div>OverviewPage</div>
}

export default OverviewPage

OverviewPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}
