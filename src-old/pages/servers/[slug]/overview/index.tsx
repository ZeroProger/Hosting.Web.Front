import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import ServerOverview from '@/screens/server/overview/ServerOverview'

import { NextPageAuth } from '@/providers/auth-provider/auth-provider.types'

import { NextPageWithLayout } from '@/pages/_app'

const OverviewPage: NextPageWithLayout & NextPageAuth = () => {
	return <ServerOverview />
}

OverviewPage.isOnlyUser = true

OverviewPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}

export default OverviewPage
