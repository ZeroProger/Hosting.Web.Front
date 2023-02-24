import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { IParams } from '@/shared/types/base.types'

import { getServerUrl } from '@/config/url.config'

import { NextPageWithLayout } from '@/pages/_app'

const ServerPage: NextPageWithLayout = () => {
	const router = useRouter()
	const { slug } = router.query as IParams

	useEffect(() => {
		router.push(getServerUrl(`/${slug}/overview/`))
	}, [])

	return null
}

export default ServerPage
