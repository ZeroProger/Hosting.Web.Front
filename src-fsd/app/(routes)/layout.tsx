import { Rubik } from '@next/font/google'
import { MainProvider } from 'app/(providers)/main-provider'

import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

const rubik = Rubik({
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
	variable: '--font-rubik',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru" className={rubik.variable}>
			<body>
				<MainProvider>
					<div className="flex flex-col w-full h-full">
						<Header />
						<main className="content-container flex-auto p-layout-sm sm:p-layout">{children}</main>
						<Footer />
					</div>
				</MainProvider>
			</body>
		</html>
	)
}
