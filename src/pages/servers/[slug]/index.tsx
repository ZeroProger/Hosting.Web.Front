import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { IParams } from '@/shared/types/base.types'

import { getServerOverviewUrl } from '@/config/url.config'

import { NextPageWithLayout } from '@/pages/_app'

const ServerPage: NextPageWithLayout = () => {
	const router = useRouter()
	const { slug } = router.query as IParams

	useEffect(() => {
		if (slug) {
			router.push(getServerOverviewUrl(slug))
		}
	}, [slug])

	return null
}

export default ServerPage
