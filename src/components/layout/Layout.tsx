import { Rubik } from '@next/font/google'
import clsx from 'clsx'
import { FC, Fragment, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'
import Header from './header/Header'

interface ILayout extends PropsWithChildren {}
const rubik = Rubik({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-rubik',
})

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<Fragment>
			<Header />
			<div className={clsx(styles.layoutWrapper, rubik.variable)}>{children}</div>
		</Fragment>
	)
}

export default Layout
