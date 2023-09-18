import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import ServerBackups from '@/screens/server/backups/ServerBackups'

import { NextPageWithLayout } from '@/pages/_app'

const BackupsPage: NextPageWithLayout = () => {
	return <ServerBackups />
}

export default BackupsPage

BackupsPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}
