'use client'

import { ModCategoryFilter } from './mod-category-filter'
import { ModClassFilter } from './mod-class-filter'
import { ModSoftwareFilter } from './mod-software-filter'
import { ModVersionFilter } from './mod-version-filter'
import styles from './styles.module.scss'

export function ModFilters() {
	return (
		<div className={styles.filters}>
			<ModClassFilter />
			<ModCategoryFilter />
			<ModSoftwareFilter />
			<ModVersionFilter />
		</div>
	)
}
