import { NextUIProvider, createTheme } from '@nextui-org/react'
import { SSRProvider } from '@react-aria/ssr'
import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import Layout from '@/components/layout/Layout'

import { IS_DARK_THEME } from '@/config/constants'

import { store } from '../store'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 5 * 60 * 1000,
			cacheTime: 5 * 60 * 1000,
			refetchOnMount: false,
			refetchOnWindowFocus: false,
		},
	},
})

const nextUITheme = createTheme({
	type: IS_DARK_THEME ? 'dark' : 'light',
	theme: {
		colors: {
			primaryLight: '$green200',
			primaryLightHover: '$green300',
			primaryLightActive: '$green400',
			primaryLightContrast: '$green600',
			primary: '#08c466',
			secondary: '#00b303',
			secondaryGray: '#006B6A',
			secondaryBlue: '#59BAB8',
			secondaryDirt: '#bb855d',
			landscape: '#171b3d',
			primaryBorder: '$green500',
			primaryBorderHover: '$green600',
			primarySolidHover: '$green700',
			primarySolidContrast: '$white',
			primaryShadow: '$green500',
			link: '#08c466',
			background: '$gray200',
			accents2: '$gray600',
			border: '$gray200',
		},
		zIndices: {
			max: '99999',
			maxDropdown: '100000',
		},
	},
})

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<SSRProvider>
					<NextUIProvider disableBaseline theme={nextUITheme}>
						<Layout>{children}</Layout>
					</NextUIProvider>
				</SSRProvider>
			</QueryClientProvider>
			<ToastContainer
				position="bottom-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				rtl={false}
				closeOnClick
				pauseOnFocusLoss
				pauseOnHover
				draggable
				theme="dark"
			/>
		</Provider>
	)
}

export default MainProvider
