import { FC, Fragment, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'
import Header from './header/Header'

interface ILayout extends PropsWithChildren {}

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<Fragment>
			<Header />
			<div className={styles.layoutWrapper}>{children}</div>
		</Fragment>
	)
}

export default Layout
