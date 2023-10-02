import { useState } from 'react'

import { useLocalStorage } from '@/shared/hooks'

export const useJoyrideGuide = () => {
	const [isGuideStarted, setIsGuideStarted] = useLocalStorage('isGuideStarted', false)
	const [isGuideCompleted, setIsGuideCompleted] = useLocalStorage('isGuideCompleted', false)

	const [modalVisible, setModalVisible] = useState(!isGuideCompleted && !isGuideStarted)

	const handleStartGuide = () => {
		setModalVisible(false)
		setIsGuideStarted(true)
	}

	const handleSkipGuide = () => {
		setModalVisible(false)
		setIsGuideCompleted(true)
	}

	const handleFinishGuide = () => {
		setIsGuideCompleted(true)
	}

	return {
		isGuideStarted,
		isGuideCompleted,
		modalVisible,
		functions: {
			handleStartGuide,
			handleSkipGuide,
			handleFinishGuide
		},
	}
}
