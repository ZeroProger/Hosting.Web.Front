import { ServerLayout } from '@/layouts/server-layout'

export default async function ServerLayoutPage({ children }: { children: React.ReactNode }) {
	return <ServerLayout>{children}</ServerLayout>
}
