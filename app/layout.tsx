import { Rubik } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css'

import { MainProvider } from '@/app/providers/main-provider'
import '@/app/styles/_globals.scss'

import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Main } from '@/widgets/main'

const rubik = Rubik({
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
	variable: '--font-rubik',
})

/**
 * @param {React.ReactNode} children - контент root layout`а, рендерится в теге main.
 * @returns {JSX.Element} Основной layout, содержит все провайдеры, header, main и footer.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru" className={rubik.variable}>
			<body>
				<MainProvider>
					<div className="flex flex-col w-full h-full">
						<Header />
						<Main>{children}</Main>
						<Footer />
					</div>
				</MainProvider>
			</body>
		</html>
	)
}
