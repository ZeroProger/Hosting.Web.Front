import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import 'react-toastify/dist/ReactToastify.min.css'

import MainProvider from '@/providers/MainProvider'
import AuthProvider from '@/providers/auth-provider/AuthProvider'
import { TypeComponentAuthFields } from '@/providers/auth-provider/auth-provider.types'

import '@/styles/CustomSelect.scss'
import '@/styles/Tabs.scss'
import '@/styles/VersionSelect.scss'
import '@/styles/globals.scss'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export default function App({
	Component,
	pageProps,
}: AppPropsWithLayout & TypeComponentAuthFields) {
	const getLayout = Component.getLayout ?? ((page) => page)

	return (
		<MainProvider>
			<AuthProvider
				Component={{
					isOnlyUser: Component.isOnlyUser,
				}}
			>
				{getLayout(<Component {...pageProps} />)}
			</AuthProvider>
		</MainProvider>
	)
}
