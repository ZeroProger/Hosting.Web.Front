import { FolderUp } from 'lucide-react'

import { Button } from '@/shared/ui/button'

export function FolderUpload() {
	const handleUploadFolder = () => {}

	return (
		<Button variant="ghost" size="icon" onClick={handleUploadFolder}>
			<FolderUp size={24} />
		</Button>
	)
}
