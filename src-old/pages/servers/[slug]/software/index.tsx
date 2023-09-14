import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import Softwares from '@/screens/software/Softwares'

import { NextPageWithLayout } from '@/pages/_app'

const SoftwarePage: NextPageWithLayout = () => {
	return <Softwares />
}

SoftwarePage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}

export default SoftwarePage
