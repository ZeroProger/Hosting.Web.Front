import ServerLayout from '@/components/server-layout/ServerLayout'
import { NextPageWithLayout } from '@/pages/_app'
import { NextPage } from 'next'
import { ReactElement } from 'react'

const SettingsPage: NextPageWithLayout = () => {
	return <div>SettingsPage</div>
}

export default SettingsPage

SettingsPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}