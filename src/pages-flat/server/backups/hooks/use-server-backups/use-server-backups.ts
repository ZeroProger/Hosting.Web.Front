import { ChangeEvent, useState } from 'react'

export function useServerBackups() {
	const [isAutoCopy, setIsAutoCopy] = useState<boolean>(false)
	const [autoCopyPeriod, setAutoCopyPeriod] = useState<number>(0)
	const [backupName, setBackupName] = useState<string>('')

	const handleIsAutoCopyChange = (checked: boolean) => {
		setIsAutoCopy(checked)
	}

	const handleAutoCopyPeriodChange = (e: ChangeEvent<HTMLInputElement>) => {
		setAutoCopyPeriod(parseInt(e.target.value))
	}

	const handleSaveAutoCopyClick = () => {
		console.log('auto copy save')
	}

	const handleBackupNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setBackupName(e.target.value)
	}

	const handleCreateBackupClick = () => {
		console.log('create backup')
	}

	const handleRestoreBackupClick = () => {
		console.log('restore backup')
	}

	const handleDeleteBackupClick = () => {
		console.log('delete backup')
	}

	return {
		isAutoCopy,
		autoCopyPeriod,
		backupName,
		functions: {
			handleIsAutoCopyChange,
			handleAutoCopyPeriodChange,
			handleBackupNameChange,
			handleSaveAutoCopyClick,
			handleRestoreBackupClick,
			handleDeleteBackupClick,
			handleCreateBackupClick,
		},
	}
}
