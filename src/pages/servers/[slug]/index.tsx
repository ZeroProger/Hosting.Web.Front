import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { NextPageAuth } from '@/providers/auth-provider/auth-provider.types'

import { IParams } from '@/shared/types/base.types'

import { getServerOverviewUrl } from '@/config/url.config'

import { NextPageWithLayout } from '@/pages/_app'

const ServerPage: NextPageWithLayout & NextPageAuth = () => {
	const router = useRouter()
	const { slug } = router.query as IParams

	useEffect(() => {
		if (slug) {
			router.push(getServerOverviewUrl(slug))
		}
	}, [slug])

	return null
}

ServerPage.isOnlyUser = true

export default ServerPage
