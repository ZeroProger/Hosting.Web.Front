import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC, Fragment, useRef } from 'react'
import { useQuery } from 'react-query'

import SubHeading from '@/components/ui/heading/SubHeading'

import { IGameTariffs, ITariff } from '@/shared/types/tariff.types'

import { TariffService } from '@/services/tariff.service'

import { formatMemory, getCpuCoresCount, getTariffPriceString } from '@/utils/tariffs/tariffs'

import { getTariffsGroupedByGamesUrl } from '@/config/api/tariffs-api.config'
import { getGameUrl, getServerCreateUrl } from '@/config/url.config'

import styles from './Pricing.module.scss'

interface IPricing {}

interface IGameCheapestTariffs extends Omit<IGameTariffs, 'tariffs'> {
	tariff: ITariff | null
}

const Pricing: FC<IPricing> = () => {
	const scrollRef = useRef(null)

	const { data: groupedTariffs } = useQuery(
		getTariffsGroupedByGamesUrl(),
		() => TariffService.getTariffsGroupedByGames(),
		{ select: (data) => data.data.games }
	)

	const getCheapestTariffs = (games: IGameTariffs[]): IGameCheapestTariffs[] => {
		const data: IGameCheapestTariffs[] = games.map((game) => {
			const prices = game.tariffs.map((tariff) => tariff.monthPrice)
			const minPrice = Math.min(...prices)
			const cheapestTariff = game.tariffs.find((tariff) => tariff.monthPrice === minPrice) || null

			return {
				gameDescription: game.gameDescription,
				gameId: game.gameId,
				gameName: game.gameName,
				gameImageUrl: game.gameImageUrl,
				tariff: cheapestTariff,
			}
		})

		return data
	}

	return (
		<div className={styles.container} id="pricing">
			<SubHeading text="Поддерживаемые игры" className="text-5xl sm:text-3xl text-secondary" />
			<SubHeading text="Наши базовые тарифы для каждой игры" className="text-3xl sm:text-2xl" />
			<div className={styles.tariffs}>
				{groupedTariffs && (
					<>
						{getCheapestTariffs(groupedTariffs)?.map((game, index) => (
							<>
								<motion.div
									key={game.gameId}
									className={styles.tariff}
									initial={{ scale: 0, opacity: 0 }}
									whileInView={{ scale: 1, opacity: 1 }}
									viewport={{ once: true, amount: 'all' }}
									transition={{ delay: 0.2 * index, duration: 0.4, ease: 'backInOut' }}
								>
									<div className={styles.title}>{game.gameName}</div>
									<div className={styles.options}>
										{game.tariff && (
											<Fragment key={game.tariff.id}>
												<div className={styles.option}>
													<div className={styles.label}>CPU:</div>
													<div className={styles.value}>
														x{getCpuCoresCount(game.tariff.allocatedCpu)} {game.tariff.cpuName}{' '}
														{(game.tariff.cpuFrequency / 1000).toFixed(1)} GHz
													</div>
												</div>
												<div className={styles.option}>
													<div className={styles.label}>RAM:</div>
													<div className={styles.value}>
														{formatMemory(game.tariff.allocatedMemory)}
													</div>
												</div>
												<div className={styles.option}>
													<div className={styles.label}>Диск:</div>
													<div className={styles.value}>
														{formatMemory(game.tariff.allocatedDiskSpace)}
													</div>
												</div>
											</Fragment>
										)}
									</div>
									<div className={styles.pricing}>
										Цена: {game.tariff && getTariffPriceString(game.tariff)}
									</div>
									<div className={styles.actions}>
										<Link href={getGameUrl(game.gameId)} className={styles.btn}>
											Подробнее
										</Link>
										<Link
											href={getServerCreateUrl(`game=${game.gameId}&tariff=${game.tariff?.id}`)}
											className={styles.btnOrder}
										>
											Заказать
										</Link>
									</div>
								</motion.div>
							</>
						))}
					</>
				)}
			</div>
		</div>
	)
}

export default Pricing
