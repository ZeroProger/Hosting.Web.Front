import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import { NextPageWithLayout } from '@/pages/_app'

const ModsPage: NextPageWithLayout = () => {
	return <div>Подборки модов</div>
}

export default ModsPage

ModsPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}
