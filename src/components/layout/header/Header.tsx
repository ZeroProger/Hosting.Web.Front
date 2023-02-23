import { FC } from 'react'

import styles from './Header.module.scss'

interface IHeader {}

const Header: FC<IHeader> = () => {
	return <div className={styles.wrapper}>Header</div>
}

export default Header
