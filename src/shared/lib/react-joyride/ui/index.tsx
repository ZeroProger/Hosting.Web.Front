'use-client'

import { joyrideStylesOptions, joyrideStylesTooltip } from '..'
import { useState } from 'react'
import Joyride, { CallBackProps, Props, Step } from 'react-joyride'

import { useLocalStorage } from '@/shared/hooks'
import { Button } from '@/shared/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '@/shared/ui/dialog'

import styles from './styles.module.scss'

export function JoyrideGuide({
	steps,
	callback,
	run,
}: {
	steps: Step[]
	callback?: (data: CallBackProps) => void
} & Props) {
	const [isGuideStarted, setIsGuideStarted] = useState(false)
	const [isGuideCompleted, setIsGuideCompleted] = useLocalStorage('isGuideCompleted', false)
	const [visible, setVisible] = useState(false)

	const handleStartGuide = () => {
		setVisible(false)
		setIsGuideStarted(true)
	}

	const handleSkipGuide = () => {
		setVisible(false)
		setIsGuideCompleted(true)
	}

	return (
		<>
			<Joyride
				hideCloseButton
				hideBackButton
				continuous
				disableOverlayClose
				run={run ?? (isGuideStarted && !isGuideCompleted)}
				scrollOffset={200}
				callback={callback}
				styles={{ options: joyrideStylesOptions, tooltip: joyrideStylesTooltip }}
				steps={steps}
			/>
			<Dialog open={visible}>
				<DialogHeader className="text-2xl">Ознакомление с панелью управления сервером</DialogHeader>
				<DialogContent
					className="bg-backgroundLight border-lightGray border-2 w-[600px] text-xl text-left"
					aria-labelledby="Ознакомление с панелью управления сервером"
				>
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
				</DialogContent>
				<DialogFooter className="flex flex-row items-center justify-center gap-4">
					<Button className="py-1 px-3 text-xl" variant={'secondary'} onClick={handleSkipGuide}>
						Пропустить обучение
					</Button>
					<Button className="py-1 px-3 text-xl" variant={'outline'} onClick={handleStartGuide}>
						Начать обучение
					</Button>
				</DialogFooter>
			</Dialog>
		</>
	)
}
