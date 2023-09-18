import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import ServerConsole from '@/screens/server/console/ServerConsole'

import { NextPageWithLayout } from '@/pages/_app'

const ConsolePage: NextPageWithLayout = () => {
	return <ServerConsole />
}

export default ConsolePage

ConsolePage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}
