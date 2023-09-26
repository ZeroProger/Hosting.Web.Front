import { ServerLayout } from '@/layouts/server-layout'

/**
 * @returns Layout сервера, на всех внутренних страницах отображается ServerHeader.
 */
export default async function ServerLayoutPage({ children }: { children: React.ReactNode }) {
	return <ServerLayout>{children}</ServerLayout>
}
