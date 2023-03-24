import { NextPage } from 'next'
import { ReactElement } from 'react'

import ModLayout from '@/components/mod-layout/ModLayout'
import ServerLayout from '@/components/server-layout/ServerLayout'

import { NextPageWithLayout } from '@/pages/_app'

const RelationsPage: NextPageWithLayout = () => {
	return <div>relations</div>
}

RelationsPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<ServerLayout>
			<ModLayout>{page}</ModLayout>
		</ServerLayout>
	)
}

export default RelationsPage
