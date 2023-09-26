import { ModLayout } from '@/layouts/mod-layout'

/**
 * @returns Layout модификации, оборачивает внутренние страницы, отображая: название мода, картинку, и другую информацию о модификации.
 */
export default function ModLayoutPage({
	children,
	params,
}: {
	children: React.ReactNode
	params: { modId: number }
}) {
	return <ModLayout modId={params.modId}>{children}</ModLayout>
}
