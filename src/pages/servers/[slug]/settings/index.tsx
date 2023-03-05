import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import ServerSettings from '@/screens/server/settings/ServerSettings'

import { NextPageWithLayout } from '@/pages/_app'

const SettingsPage: NextPageWithLayout = () => {
	return <ServerSettings />
}

export default SettingsPage

SettingsPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}
