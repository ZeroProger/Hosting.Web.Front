import { FolderPlus } from 'lucide-react'

import { Button } from '@/shared/ui/button'

export function FolderCreate() {
	const handleCreateFolder = () => {}

	return (
		<Button variant="ghost" size="icon" onClick={handleCreateFolder}>
			<FolderPlus size={24} />
		</Button>
	)
}
