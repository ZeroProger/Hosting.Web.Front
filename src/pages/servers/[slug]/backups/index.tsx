import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import { NextPageWithLayout } from '@/pages/_app'

const BackupsPage: NextPageWithLayout = () => {
	return <div>BackupsPage</div>
}

export default BackupsPage

BackupsPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}
