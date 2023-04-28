import { useRouter } from 'next/router'
import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import ServerFiles from '@/screens/server/files/ServerFiles'

import { NextPageWithLayout } from '@/pages/_app'

const NestedFilesPage: NextPageWithLayout = () => {
	const router = useRouter()
	const slug = router.query.fileSlug?.toString()

	return <>{slug && <ServerFiles />}</>
}

export default NestedFilesPage

NestedFilesPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}
