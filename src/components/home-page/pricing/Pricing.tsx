import { FC } from 'react'

import styles from './Pricing.module.scss'

interface IPricing {}

const Pricing: FC<IPricing> = () => {
	return <div className={styles.container} id='pricing-anchor'>Pricing</div>
}

export default Pricing
