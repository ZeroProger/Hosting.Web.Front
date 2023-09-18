import clsx from 'clsx'
import { FC, useCallback } from 'react'

import SubHeading from '@/components/ui/heading/SubHeading'

import { Nullable } from '@/shared/types/base.types'
import { IServerCreateRequest } from '@/shared/types/requests/server-requests.types'
import { IGameTariffs } from '@/shared/types/tariff.types'

import { getTariffPriceString } from '@/utils/tariffs/tariffs'

import styles from './TariffPicker.module.scss'

interface ITariffPicker {
	groupedTariffs: IGameTariffs[]
	formData: Nullable<IServerCreateRequest>
	handleTariffChangeClick: (id: number) => void
}

const TariffPicker: FC<ITariffPicker> = ({ groupedTariffs, formData, handleTariffChangeClick }) => {
	const getTariffs = useCallback(
		(isPricePerPlayer: boolean) => {
			const gameTariffs = groupedTariffs.find((game) => game.gameId === formData.gameId)

			if (!gameTariffs) return null

			const result = gameTariffs.tariffs.filter(
				(tariff) => tariff.isPricePerPlayer === isPricePerPlayer
			)

			if (result.length === 0) return null

			return result
		},
		[formData.gameId]
	)

	return (
		<div className={styles.tariffCategories}>
			{getTariffs(false) && (
				<div className={styles.tariffCategory}>
					<SubHeading
						text="Оплата за ресурсы"
						className={clsx('text-xl', styles.tariffCategoryTitle)}
					/>
					{getTariffs(false)?.map((tariff) => (
						<div
							key={tariff.id}
							className={clsx(styles.tariff, {
								[styles.tariffActive]: tariff.id === formData.tariffId,
							})}
							onClick={() => handleTariffChangeClick(tariff.id)}
						>
							<span className={styles.tariffName}>{tariff.name}</span>
							<span className={styles.tariffPrice}>{getTariffPriceString(tariff)}</span>
						</div>
					))}
				</div>
			)}
			{getTariffs(true) && (
				<div className={styles.tariffCategory}>
					<SubHeading
						text="Оплата за слоты"
						className={clsx('text-xl', styles.tariffCategoryTitle)}
					/>
					{getTariffs(true)?.map((tariff) => (
						<div
							key={tariff.id}
							className={clsx(styles.tariff, {
								[styles.tariffActive]: tariff.id === formData.tariffId,
							})}
							onClick={() => handleTariffChangeClick(tariff.id)}
						>
							<span className={styles.tariffName}>{tariff.name}</span>
							<span className={styles.tariffPrice}>{getTariffPriceString(tariff)}</span>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default TariffPicker
