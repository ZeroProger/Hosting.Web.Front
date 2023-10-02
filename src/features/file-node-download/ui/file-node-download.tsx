import { Download } from 'lucide-react'

import { Button } from '@/shared/ui/button'

export function FileNodeDownload({ path }: { path: string }) {
	const handleDownloadNode = () => {
		console.log('download node by path:', path)
	}
	return (
		<Button
			variant="ghost"
			className="h-auto py-1 text-lg text-foreground flex flex-nowrap items-center gap-2"
			onClick={handleDownloadNode}
		>
			<Download size={20} />
			Скачать
		</Button>
	)
}
