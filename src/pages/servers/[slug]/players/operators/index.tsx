import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import { NextPageWithLayout } from '@/pages/_app'

const OperatorsPage: NextPageWithLayout = () => {
	return <div>OperatorsPage</div>
}

export default OperatorsPage

OperatorsPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}
