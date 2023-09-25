import { ModLayout } from '@/layouts/mod-layout'

export default function ModLayoutPage({
	children,
	params,
}: {
	children: React.ReactNode
	params: { modId: number }
}) {
	return <ModLayout modId={params.modId}>{children}</ModLayout>
}
