import { NextUIProvider, createTheme } from '@nextui-org/react'
import { SSRProvider } from '@react-aria/ssr'
import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import Layout from '@/components/layout/Layout'

import { store } from '../store'

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
						<Layout>{children}</Layout>
			</QueryClientProvider>
			
		</Provider>
	)
}

export default MainProvider
