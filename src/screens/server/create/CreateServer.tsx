import { CSS, FormElement, Input } from '@nextui-org/react'
import clsx from 'clsx'
// import { groupedTariffs } from 'fakeData/tariffs.data'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { ActionMeta } from 'react-select'
import { toast } from 'react-toastify'

import { IOption } from '@/components/ui/customSelect/CustomSelect'
import PropertySelect from '@/components/ui/customSelect/PropertySelect'
import Button from '@/components/ui/form-elements/Button'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/heading/SubHeading'

import { Nullable } from '@/shared/types/base.types'
import { IServerCreateRequest } from '@/shared/types/requests/server-requests.types'
import { ILocation, ITariff } from '@/shared/types/tariff.types'

import { ServerService } from '@/services/server.service'
import { TariffService } from '@/services/tariff.service'

import Meta from '@/utils/meta/Meta'
import { allPropertiesNotNull } from '@/utils/objects/allPropertiesNotNull'
import { formatPrice } from '@/utils/tariffs/tariffs'

import { getTariffsGroupedByGamesUrl } from '@/config/api/tariffs-api.config'
import { primary } from '@/config/constants'
import { getServerUrl } from '@/config/url.config'

import styles from './CreateServer.module.scss'
import TariffData from './tariff-data/TariffData'
import TariffPicker from './tariff-picker/TariffPicker'

interface ICreateServer {}

const CreateServer: FC<ICreateServer> = () => {
	const { data: groupedTariffs } = useQuery(
		getTariffsGroupedByGamesUrl(),
		() => TariffService.getTariffsGroupedByGames(),
		{ select: (data) => data.data.games }
	)

	const router = useRouter()

	const [formData, setFormData] = useState<Nullable<IServerCreateRequest>>({
		gameId: null,
		locationId: null,
		name: null,
		period: null,
		slots: null,
		tariffId: null,
		isTestPeriod: null,
		promoCode: null,
	})
	const [pickedTariff, setPickedTariff] = useState<ITariff | null>(null)
	const [pickedLocation, setPickedLocation] = useState<ILocation | null>(null)

	const onCreateServerSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!allPropertiesNotNull(formData, ['isTestPeriod', 'promoCode'])) {
			toast.error('Заполните все поля для создания сервера')
			return
		}

		const { data } = await ServerService.compositor.createServer(formData as IServerCreateRequest)

		if (data.error.length === 0 && data.success) {
			toast.success('Сервер успешно создан')
			router.push(getServerUrl(data.gameServerHash))
		}
	}

	const handleGameChangeClick = (gameId: number) => {
		setPickedTariff(null)
		setPickedLocation(null)
		setFormData({ ...formData, gameId: gameId })
	}

	const handleTariffChangeClick = (tariffId: number) => {
		const tariff = getTariffById(tariffId)
		setPickedTariff(tariff)
	}

	const handleLocationChangeClick = (locationId: number) => {
		const location = getLocationById(locationId)

		setPickedLocation(location)

		setFormData({ ...formData, locationId: locationId })
	}

	const handlePeriodSelect = (newValue: any, actionMeta: ActionMeta<unknown>) => {
		setFormData({ ...formData, period: parseInt(newValue.value) || 30 })
	}

	const handlePromocodeChange = (e: ChangeEvent<FormElement>) => {
		setFormData({ ...formData, promoCode: e.target.value })
	}

	const handleServerNameChange = (e: ChangeEvent<FormElement>) => {
		setFormData({ ...formData, name: e.target.value })
	}

	const handleSlotsChange = (e: ChangeEvent<FormElement>) => {
		setFormData({ ...formData, slots: parseInt(e.target.value) })
	}

	const getTariffById = (tariffId: number) => {
		if (formData.gameId === null) return null

		const game = groupedTariffs?.find((game) => game.gameId === formData.gameId)

		if (!game) return null

		const tariff = game.tariffs.find((tariff) => tariff.id === tariffId)

		return tariff || null
	}

	const getLocationById = (locationId: number) => {
		if (!pickedTariff) return null

		const location = pickedTariff.locations.find((location) => location.id === locationId)

		return location || null
	}

	useEffect(() => {
		if (pickedTariff) {
			const location = pickedTariff?.locations.at(0) || null
			setPickedLocation(location)

			if (location !== null) {
				setFormData({
					...formData,
					tariffId: pickedTariff.id,
					locationId: location?.id,
					period: 30,
					slots: pickedTariff.minSlots,
				})
			} else {
				setFormData({
					...formData,
					tariffId: pickedTariff.id,
					locationId: null,
					period: 30,
					slots: pickedTariff.minSlots,
				})
			}
		}
	}, [pickedTariff])

	useEffect(() => {
		if (formData.gameId !== null && groupedTariffs) {
			const game = groupedTariffs.find((game) => game.gameId === formData.gameId)

			if (game) {
				const tariff = game.tariffs.at(0)

				if (tariff) {
					setPickedTariff(tariff)
				}
			}
		}
	}, [formData.gameId])

	useEffect(() => {
		if (groupedTariffs && groupedTariffs.length > 0) {
			setFormData({ ...formData, gameId: groupedTariffs[0].gameId })
		}
	}, [groupedTariffs])

	useEffect(() => {
		console.table(formData)
	}, [formData])

	const periodOptions: IOption[] = [
		{ label: '1 месяц', value: '30' },
		{ label: '2 месяца', value: '60' },
		{ label: '3 месяца', value: '90' },
	]

	const inputTextCSS: CSS = {
		'& input': { fontSize: '1.125rem', padding: '$2 $4' },
		'& .nextui-input-container--input': { height: '44px' },
		'& .nextui-input-wrapper': {
			background: 'transparent',
			border: '2px solid var(--light-gray)',
			borderRadius: '16px',
		},
	}

	const inputRangeCSS: CSS = {
		'& input': {
			fontSize: '1.125rem',
			padding: '$2 $4',
			color: primary,
			'&::-webkit-slider-thumb': {
				'-webkit-appearance': 'none',
				width: '14px',
				height: '14px',
				borderRadius: '16px',
				background: primary,
				cursor: 'pointer',
			},
			'&::-moz-range-thumb': {
				width: '14px',
				height: '14px',
				borderRadius: '16px',
				background: primary,
				cursor: 'pointer',
			},
			'&::-ms-thumb': {
				width: '14px',
				height: '14px',
				borderRadius: '16px',
				background: primary,
				cursor: 'pointer',
			},
			'&:focus': { outline: 'none' },
			'&::-ms-track': { cursor: 'pointer' },
		},

		'& .nextui-input-container--input': { height: '44px' },
		'& .nextui-input-wrapper': {
			background: 'transparent',
			border: '2px solid var(--light-gray)',
			borderRadius: '16px',
		},
	}

	return (
		<Meta
			title="Создание сервера"
			description="Создайте сервер прямо сейчас! Низкие цены, удобный сайт, стабильные сервера и множество других деталей делают нас одним из лучших хостингов! Просто попробуйте, активируйте однодневный тестовый период и оцените все достоинства нашего проекта!"
		>
			<div className={styles.container}>
				<Heading title="Создание сервера" />
				{groupedTariffs && groupedTariffs.length > 0 && (
					<form onSubmit={onCreateServerSubmit}>
						<div className={styles.blockWrapper}>
							<SubHeading text="Выбор игры" className="text-2xl" />
							<div className={styles.games}>
								{groupedTariffs.map((game) => (
									<div
										key={game.gameId}
										className={clsx(styles.gameRadioBtn, {
											[styles.gameRadioBtnActive]: game.gameId === formData.gameId,
										})}
										onClick={() => handleGameChangeClick(game.gameId)}
									>
										<Image
											src={game.gameImageUrl}
											alt={`${game.gameName} - ${game.gameDescription}`}
											width={48}
											height={48}
										/>
										<span>{game.gameName}</span>
									</div>
								))}
							</div>
						</div>

						{formData.gameId !== null && (
							<div className={styles.blockWrapper}>
								<div className={styles.tariffsWrapper}>
									<div className={styles.tariffs}>
										<SubHeading text="Выбор тарифа" className="text-2xl" />
										<TariffPicker
											groupedTariffs={groupedTariffs}
											formData={formData}
											handleTariffChangeClick={handleTariffChangeClick}
										/>
									</div>
									{pickedTariff && (
										<div className={styles.tariffData}>
											<SubHeading
												text={`Описание тарифа ${pickedTariff.name}`}
												className="text-2xl mb-6"
											/>
											{pickedTariff && <TariffData tariff={pickedTariff} />}
										</div>
									)}
								</div>
							</div>
						)}

						{pickedTariff !== null && (
							<>
								<div className={styles.blockWrapper}>
									<div className={styles.locationsWrapper}>
										<div className={styles.locations}>
											<SubHeading text="Выбор локации" className="text-2xl" />
											<div className={styles.locationsPicker}>
												{pickedTariff.locations.map((location) => (
													<div
														key={location.id}
														className={clsx(styles.location, {
															[styles.locationActive]: location.id === formData?.locationId,
														})}
														onClick={() => handleLocationChangeClick(location.id)}
													>
														{location.name}
													</div>
												))}
											</div>
										</div>
										<div className={styles.ipWrapper}>
											<SubHeading text="IP для теста пинга" className="text-2xl mb-4" />
											<div className={styles.locationIp}>{pickedLocation?.testIp}</div>
										</div>
									</div>
								</div>
								<div className={clsx(styles.blockWrapper, styles.otherSettings)}>
									<div className={styles.serverNameWrapper}>
										<SubHeading text="Название сервера" className="text-2xl" />
										<Input
											fullWidth
											placeholder="Название"
											onChange={handleServerNameChange}
											css={inputTextCSS}
											animated={false}
										/>
									</div>
									{pickedTariff.isPricePerPlayer && (
										<div className={styles.slotsWrapper}>
											<SubHeading text="Кол-во слотов" className="text-2xl" />
											<div className={styles.slotsInputs}>
												<Input
													type="range"
													fullWidth
													min={pickedTariff.minSlots}
													max={pickedTariff.maxSlots}
													defaultValue={pickedTariff.minSlots}
													value={String(formData.slots)}
													onChange={handleSlotsChange}
													step={1}
													css={inputRangeCSS}
													animated={false}
												/>
												<Input
													type="number"
													value={String(formData.slots)}
													onChange={handleSlotsChange}
													animated={false}
													width="150px"
													css={inputTextCSS}
												/>
											</div>
										</div>
									)}
									<div className={styles.periodWrapper}>
										<SubHeading text="Срок аренды" className="text-2xl" />
										{formData.period && (
											<PropertySelect
												options={periodOptions}
												value={
													periodOptions.find((item) => item.value === String(formData.period))!!
												}
												onChange={handlePeriodSelect}
											/>
										)}
									</div>
									<div className={styles.promoCodeWrapper}>
										<SubHeading text="Промокод" className="text-2xl" />
										<Input
											fullWidth
											placeholder="Промокод"
											onChange={handlePromocodeChange}
											css={inputTextCSS}
											animated={false}
										/>
									</div>
								</div>
							</>
						)}

						{pickedTariff && (
							<div className={styles.finalPriceBar}>
								<div className={styles.finalPriceWrapper}>
									<span>Итого к оплате:</span>
									<div className={styles.finalPrice}>{formatPrice(1650)}</div>
								</div>
								<Button type="submit" className={styles.submitBtn}>
									Создать
								</Button>
							</div>
						)}
					</form>
				)}
			</div>
		</Meta>
	)
}

export default CreateServer
