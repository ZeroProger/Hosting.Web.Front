'use client'

import { ModDescription } from '@/pages-flat/mods/mod'

export default function ModPage({ params }: { params: { modId: number } }) {
	return <ModDescription modId={params.modId} />
}
