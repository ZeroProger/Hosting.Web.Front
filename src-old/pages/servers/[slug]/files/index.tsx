import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import ServerFiles from '@/screens/server/files/ServerFiles'

import { NextPageWithLayout } from '@/pages/_app'

const FilesPage: NextPageWithLayout = () => {
	return <ServerFiles />
}

export default FilesPage

FilesPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}
