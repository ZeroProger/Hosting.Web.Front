import { useLocalStorage } from '@/shared/hooks'
import { useState } from 'react'

export const useJoyrideGuide = () => {
	const [isGuideStarted, setIsGuideStarted] = useState(false)
	const [isGuideCompleted, setIsGuideCompleted] = useLocalStorage('isGuideCompleted', false)
	const [modalVisible, setModalVisible] = useState(!isGuideCompleted)

	const handleStartGuide = () => {
		setModalVisible(false)
		setIsGuideStarted(true)
	}

	const handleSkipGuide = () => {
		setModalVisible(false)
		setIsGuideCompleted(true)
	}

	return {
		isGuideStarted,
		isGuideCompleted,
		modalVisible,
		functions: {
			handleStartGuide, handleSkipGuide
		}
	}
}