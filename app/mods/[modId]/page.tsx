import { Mod } from '@/pages-flat/mods/mod'

export default function ModPage({ params }: { params: { modId: number } }) {
	return <Mod modId={params.modId} />
}
