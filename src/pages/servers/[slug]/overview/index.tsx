import { ReactElement } from 'react';



import { ServerCard } from '@/components/server-card/ServerCard'
import ServerLayout from '@/components/server-layout/ServerLayout';



import { NextPageWithLayout } from '@/pages/_app';


const OverviewPage: NextPageWithLayout = () => {
	return (
		<>
			<ServerCard />
		</>
	)
}

export default OverviewPage

OverviewPage.getLayout = function getLayout(page: ReactElement) {
	return <ServerLayout>{page}</ServerLayout>
}