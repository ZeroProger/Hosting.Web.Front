import dynamic from 'next/dynamic'
import { FC, PropsWithChildren } from 'react'

import { TypeComponentAuthFields } from './auth-provider.types'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	Component: { isOnlyUser },
	children,
}) => {
	return isOnlyUser ? (
		<DynamicCheckRole Component={{ isOnlyUser }}>{children}</DynamicCheckRole>
	) : (
		<>{children}</>
	)
}

export default AuthProvider
