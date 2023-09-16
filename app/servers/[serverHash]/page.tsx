import { redirect } from 'next/navigation'

import { ServerUrls } from '@/shared/routes/urls'

export default async function ServerPage({ params }: { params: { serverHash: string } }) {
	redirect(ServerUrls.server.overview(params.serverHash))
}
