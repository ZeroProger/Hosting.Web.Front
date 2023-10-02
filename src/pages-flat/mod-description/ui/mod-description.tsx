'use client'

import parse from 'html-react-parser'

import styles from './styles.module.scss'
import { useFetchModDescription } from '@/layouts/mod-layout/queries'

export function ModDescription({ modId }: { modId: number }) {
	const { data: modDescription, isLoading } = useFetchModDescription(modId)

	if (!modDescription || isLoading) return null

	return <div className={styles.description}>{parse(modDescription)}</div>
}
