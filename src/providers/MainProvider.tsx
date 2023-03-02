import { NextUIProvider, createTheme } from '@nextui-org/react'
import { SSRProvider } from '@react-aria/ssr'
import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Layout from '@/components/layout/Layout'

import { IS_DARK_THEME } from '@/config/constants'

const queryClient = new QueryClient()

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
			link: '#8d4ede',
			background: '$gray200',
			accents2: '$gray600',
			border: '$gray200',
		},
	},
})

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<SSRProvider>
				<NextUIProvider disableBaseline theme={nextUITheme}>
					<Layout>{children}</Layout>
				</NextUIProvider>
			</SSRProvider>
		</QueryClientProvider>
	)
}

export default MainProvider
