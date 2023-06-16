import { filesTree } from 'fakeData/server.data'
import { useRouter } from 'next/router'
import { ReactElement, useEffect, useState } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import ServerFiles from '@/screens/server/files/ServerFiles'

import { IFileNode } from '@/shared/types/server.types'

import { deepSearch } from '@/utils/objects/deepSearch'

import { NextPageWithLayout } from '@/pages/_app'

const NestedFilesPage: NextPageWithLayout = () => {
	const router = useRouter()
	const slug = router.query.fileSlug

	const [filesList, setFilesList] = useState<IFileNode[]>([])

	useEffect(() => {
		if (slug) {
			const node = findNodeBySlug(slug)

			setFilesList(node?.children || [])
		}
	}, [slug])

	const findNodeBySlug = (slug: string | string[]) => {
		let path = '/'

		if (Array.isArray(slug)) {
			path += slug.join('/')
		} else {
			path += slug
		}

		const node = deepSearch(filesTree, 'path', (k, v) => v === path)

		return node
	}

	return <>{slug && <ServerFiles nestedList={filesList} />}</>
}

NestedFilesPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}

export default NestedFilesPage
