import { redirect } from 'next/navigation'

import { ServerUrls } from '@/shared/routes/urls'

/**
 * @returns Заглушка, редиректит на страницу /overview.
 */
export default async function ServerPage({ params }: { params: { serverHash: string } }) {
	redirect(ServerUrls.server.overview(params.serverHash))
}
