'use client'

import { authContext, useAuthProvider } from '@/entities/auth'

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const auth = useAuthProvider()

	return <authContext.Provider value={auth}>{children}</authContext.Provider>
}
