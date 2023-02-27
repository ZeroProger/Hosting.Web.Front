import { Card, Popover, Text } from '@nextui-org/react'
import { FC, useRef } from 'react'

import { Icon } from '../ui/Icon'
import { AvatarGroup } from '../ui/avatar-group/AvatarGroup'

import styles from './ServerActivePlayers.module.scss'

const ServerActivePlayers: FC = () => {
	const ipRef = useRef<HTMLSpanElement>(null)
	const dynIpRef = useRef<HTMLSpanElement>(null)

	return (
		<Card className={styles.card}>
			<Card.Header>Сервер</Card.Header>
			<hr className="bg-lightGray opacity-40" />
			<Card.Body className="flex flex-row justify-between w-4/5">
				<div className="flex flex-col justify-between w-4/5">
					<ul className="text-lightGray flex flex-col justify-between h-44">
						<li className="h-7">Статус</li>
						<li className="h-7">Игроки</li>
						<li className="h-7">IP</li>
						<li className="h-7">Дин. IP</li>
						<li className="h-7">Версия</li>
						<li className="h-7">Ядро</li>
					</ul>
				</div>
				<div className="flex flex-col justify-between">
					<ul className="flex flex-col justify-between h-44">
						<li className="text-primary h-7">Онлайн</li>
						<li className="flex h-7 my-[-2px]">
							<span className="mr-4">4/8 игроков онлайн</span>
							<AvatarGroup />
						</li>
						<li className="flex items-center h-7">
							<span className="mr-2" ref={ipRef}>
								arcade-sky.ploudos.game
							</span>
							<Popover shouldCloseOnBlur placement={'right'}>
								<Popover.Trigger>
									<div onClick={() => navigator.clipboard.writeText(ipRef.current?.innerText!)}>
										<Icon name="Io5Copy" />
									</div>
								</Popover.Trigger>
								<Popover.Content className="rounded-xl">
									<Text className="p-1">Скопировано</Text>
								</Popover.Content>
							</Popover>
						</li>
						<li className="flex items-center h-7">
							<span className="mr-2" ref={dynIpRef}>
								dynY6ZHOK.ploudos.cloud:10305
							</span>

							<Popover shouldCloseOnBlur placement={'right'}>
								<Popover.Trigger>
									<div onClick={() => navigator.clipboard.writeText(dynIpRef.current?.innerText!)}>
										<Icon name="Io5Copy" />
									</div>
								</Popover.Trigger>
								<Popover.Content className="rounded-xl">
									<Text className="p-1">Скопировано</Text>
								</Popover.Content>
							</Popover>
						</li>
						<li className="flex items-center h-7">
							<span className="mr-2">1.16.5</span>
							<Icon name="AiFillEdit" />
						</li>
						<li className="flex items-center h-7">
							<span className="mr-2">Paper</span>
							<Icon name="AiFillEdit" />
						</li>
					</ul>
				</div>
			</Card.Body>
		</Card>
	)
}

export default ServerActivePlayers
