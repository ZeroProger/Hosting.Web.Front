'use client'

import { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'
import { memo } from 'react'

export type IconName = keyof typeof dynamicIconImports

interface IconProps extends LucideProps {
	name: IconName
}

const arePropsEqual = (prev: IconProps, next: IconProps) => prev.name === next.name

// eslint-disable-next-line prefer-arrow-callback
export const Icon = memo(function IconMemo({ name, ...props }: IconProps) {
	const LucideIcon = dynamic(dynamicIconImports[name])

	return <LucideIcon {...props} />
}, arePropsEqual)
