import { ReactElement } from 'react'

import ServerLayout from '@/components/server-layout/ServerLayout'

import { NextPageWithLayout } from '@/pages/_app'

const CategoryPage: NextPageWithLayout = () => {
	return (
		<div>Обработка категории из url, переброска её в query параметры, редирект на search mods</div>
	)
}

export default CategoryPage

CategoryPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}
