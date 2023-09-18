'use-client'

import Joyride, { CallBackProps, Step } from 'react-joyride'

import { Button } from '@/shared/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '@/shared/ui/dialog'

import { useJoyrideGuide } from '../hooks'
import { joyrideStylesOptions, joyrideStylesTooltip } from '../config'

import styles from './styles.module.scss'

export function JoyrideGuide({
	steps,
	callback,
}: {
	steps: Step[]
	callback?: (data: CallBackProps) => void
}) {
	const { isGuideCompleted, isGuideStarted, modalVisible, functions } = useJoyrideGuide()
	const { handleSkipGuide, handleStartGuide } = functions

	return (
		<>
			<Joyride
				hideCloseButton
				hideBackButton
				continuous
				disableOverlayClose
				run={isGuideStarted && !isGuideCompleted}
				scrollOffset={200}
				callback={callback}
				styles={{ options: joyrideStylesOptions, tooltip: joyrideStylesTooltip }}
				steps={steps}
			/>
			<Dialog open={modalVisible}>
				<DialogContent
					className="bg-backgroundLight border-lightGray border-2 w-[600px] text-xl text-left"
					aria-labelledby="Ознакомление с панелью управления сервером"
				>
					<DialogHeader className="text-2xl">
						Ознакомление с панелью управления сервером
					</DialogHeader>
					<p>Поздравляем вас с созданием собственного сервера!</p>
					<p>
						Предлагаем вам пройти обучение и ознакомиться с возможностями панели управления игровым
						сервером.
					</p>
					<p>Вы научитесь:</p>
					<ul className={styles.ul}>
						<li>Быстро ориентироваться в информации о вашем игровом сервере</li>
						<li>Создавать и останавливать сервер</li>
						<li>Управлять игроками</li>
						<li>Устанавливать модификации</li>
						<li>Взаимодействовать с консолью управления игровым сервером</li>
						<li>Настраивать основной файл конфигурации игрового сервера</li>
					</ul>
					<DialogFooter className="flex flex-row items-center justify-center gap-4">
						<Button className="py-1 px-3 text-xl" variant={'secondary'} onClick={handleSkipGuide}>
							Пропустить обучение
						</Button>
						<Button className="py-1 px-3 text-xl" variant={'outline'} onClick={handleStartGuide}>
							Начать обучение
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	)
}
