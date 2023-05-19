import { Radio } from '@nextui-org/react'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useQuery } from 'react-query'

import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/heading/SubHeading'

import { IServerCreateRequest } from '@/shared/types/requests/server-requests.types'

import { TariffService } from '@/services/tariff.service'

import Meta from '@/utils/meta/Meta'

import { getTariffsGroupedByGamesUrl } from '@/config/api/tariffs-api.config'

import styles from './CreateServer.module.scss'

interface ICreateServer {}

const CreateServer: FC<ICreateServer> = () => {
	const { data: groupedTariffs } = useQuery(
		getTariffsGroupedByGamesUrl(),
		() => TariffService.getTariffsGroupedByGames(),
		{ select: (data) => data.data.games }
	)

	const { register, handleSubmit, formState, reset, control } = useForm<IServerCreateRequest>({
		mode: 'onChange',
	})

	const onCreateServerSubmit: SubmitHandler<IServerCreateRequest> = (data) => {
		console.log(data)

		reset()
	}

	return (
		<Meta
			title="Создание сервера"
			description="Создайте сервер прямо сейчас! Низкие цены, удобный сайт, стабильные сервера и множество других деталей делают нас одним из лучших хостингов! Просто попробуйте, активируйте однодневный тестовый период и оцените все достоинства нашего проекта!"
		>
			<div className={styles.container}>
				<Heading title="Создание сервера" />
				<SubHeading text="Выбор игры" className="text-xl" />
				{groupedTariffs && groupedTariffs.length > 0 && (
					<form onSubmit={handleSubmit(onCreateServerSubmit)}>
						<div className={styles.games}>
							<Radio.Group defaultValue={String(groupedTariffs.at(0)?.gameId)} name="gameId">
								{groupedTariffs.map((game) => (
									<Radio
										{...register('gameId')}
										name="gameId"
										value={String(game.gameId)}
										key={game.gameId}
									>
										{game.gameName}
									</Radio>
								))}
							</Radio.Group>
						</div>
						<div className={styles.tariffs}></div>
						<div className={styles.actions}>
							<button type="submit" className={styles.submitBtn}>
								Создать
							</button>
						</div>
					</form>
				)}
			</div>
		</Meta>
	)
}

export default CreateServer
