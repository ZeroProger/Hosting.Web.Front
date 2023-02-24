import ServerLayout from '@/components/server-layout/ServerLayout'
import { NextPageWithLayout } from '@/pages/_app'
import { NextPage } from 'next'
import { ReactElement } from 'react'

const ModsPage: NextPageWithLayout = () => {
	return <div>ModsPage</div>
}

export default ModsPage

ModsPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}