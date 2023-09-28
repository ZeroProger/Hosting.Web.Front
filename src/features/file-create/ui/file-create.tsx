import { FilePlus } from 'lucide-react'

import { Button } from '@/shared/ui/button'

export function FileCreate() {
	const handleCreateFile = () => {}

	return (
		<Button variant="ghost" size="icon" onClick={handleCreateFile}>
			<FilePlus size={24} />
		</Button>
	)
}
