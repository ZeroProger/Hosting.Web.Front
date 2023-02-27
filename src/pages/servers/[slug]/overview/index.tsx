import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import ServerOverview from '@/screens/server-overview/ServerOverview'

import { NextPageWithLayout } from '@/pages/_app'

const OverviewPage: NextPageWithLayout = () => {
	return <ServerOverview />
}

export default OverviewPage

OverviewPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}
