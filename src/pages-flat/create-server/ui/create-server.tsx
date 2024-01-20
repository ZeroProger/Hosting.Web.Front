'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import zod from 'zod'

import { IServerCreateResponse } from '@/entities/server/types/requests'

import { axiosAuth } from '@/shared/api/auth'
import { ServerApiUrls } from '@/shared/api/urls'
import { ServerUrls } from '@/shared/routes/urls'
import { Button } from '@/shared/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'

import styles from './styles.module.scss'

const formSchema = zod.object({
	serverName: zod.string(),
})

type FormSchemaType = zod.infer<typeof formSchema>

//#TODO: Полностью переделать создание, это тестовый вариант
export function ServerCreate() {
	const router = useRouter()
	const form = useForm<FormSchemaType>({
		resolver: zodResolver(formSchema),
	})

	async function onSubmit(data: FormSchemaType) {
		const response = await axiosAuth().post<IServerCreateResponse>(ServerApiUrls.create(), {
			name: data.serverName,
			gameId: 1,
			locationId: 1,
			tariffId: '1',
			period: 30,
			isTestPeriod: false,
			slots: 12,
		})

		if (response.data.success) {
			router.push(ServerUrls.server.overview(response.data.gameServerHash))
		}
	}

	return (
		<div className={styles.container}>
			{/* <ChooseModeStep />
			<PlayersStep />
			<ModsStep />
			<ProposedTariffStep />
			<AdvancedTariffStep />
			<ServerNameStep /> */}
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="w-full max-w-2xl flex flex-col gap-6"
				>
					<FormField
						control={form.control}
						name="serverName"
						render={({ field }) => (
							<FormItem className="space-y-0 flex flex-col items-center gap-6">
								<FormLabel className="text-2xl sm:text-3xl text-center">
									Введите название вашего сервера
								</FormLabel>
								<FormControl>
									<Input
										{...field}
										type="text"
										placeholder="Название сервера"
										className="text-xl sm:text-2xl w-full self-center"
										onChange={(e) => field.onChange(e.target.value)}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex flex-col-reverse xs:flex-row justify-center items-center gap-4">
						<Button type="submit" variant="primary" className="text-xl sm:text-2xl w-max px-8">
							Создать
						</Button>
					</div>
				</form>
			</Form>
		</div>
	)
}

// Сделать создание сервера концепцией "Multi Part Form"
// Сначала показываем только 1 вопрос, потом 2 вопрос, далее анимация пока сервер рассчитывает предлагаемые мощности, после выводим карточку с этими мощностями.
// Дальше юзер либо выбирает эту карточку, либо отказывается, если отказался - выводим форму с заполнением нужных ему мощностей. Тут же в лайве ему высчитывается стоимость сервера от выбранных мощностей. После этого шага спрашиваем название сервера и внизу под input`ом названия сервера кнопка создать сервер. (на последнем шаге также показываем итоговую стоимость сервера).
// Шаги:
// 0*: По какой игре создается сервер? (пока не актуально)
// 1. Сколько игроков будет играть на сервере?
// 2. Модификации какого типа планируется устанавливать на сервер?
// Варианты: Без модов, Базовые плагины, Несколько простых модов, Несколько больших модов, моды меняющие генерацию мира,
// К каждому варианту написать минимум по 5 самых популярных примеров.
// Реализовать проверку: если выбрано `без модов`, то при выборе других вариантов `без модов` сбрасывается. Соответственно эти кнопки ToggleButton внутри ToggleGroup из shadcn.
// Если выбраны другие варианты, то они могут быть скомбинированы, то есть можно выбрать:
// [Базовые плагины, несколько простых модов, несколько больших модов, моды меняющие генерацию мира]
// Получается все эти вещи юзер хочет юзать на сервере, и бэк должен рассчитать предполагаемую нагрузку, и предложить мощности.
