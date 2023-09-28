import { Trash2 } from 'lucide-react'

import { Button } from '@/shared/ui/button'

export function FileNodeRemove({ path }: { path: string }) {
	const handleRemoveNode = () => {
		console.log(`remove node by path: `, path)
	}

	return (
		<Button
			variant="ghost"
			className="h-auto py-1 text-lg text-foreground hover:bg-destructive hover:text-destructive-foreground flex flex-nowrap items-center gap-2"
			onClick={handleRemoveNode}
		>
			<Trash2 size={20} />
			Удалить
		</Button>
	)
}
