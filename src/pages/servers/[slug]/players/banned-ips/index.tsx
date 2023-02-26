import ServerLayout from '@/components/server-layout/ServerLayout'
import { NextPageWithLayout } from '@/pages/_app'
import { NextPage } from 'next'
import { ReactElement } from 'react'

const BannedIpsPage: NextPageWithLayout = () => {
	return <div>BannedIpsPage</div>
}

export default BannedIpsPage

BannedIpsPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}