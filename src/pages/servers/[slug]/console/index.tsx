import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import { NextPageWithLayout } from '@/pages/_app'

const ConsolePage: NextPageWithLayout = () => {
	return <div>ConsolePage</div>
}

export default ConsolePage

ConsolePage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}
