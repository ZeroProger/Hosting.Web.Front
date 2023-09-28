import { FileUp } from 'lucide-react'

import { Button } from '@/shared/ui/button'

export function FileUpload() {
	const handleUploadFile = () => {}
	
	return (
		<Button variant="ghost" size="icon" onClick={handleUploadFile}>
			<FileUp size={24} />
		</Button>
	)
}
