import { RotateCcw } from 'lucide-react'

import { Button } from '@/shared/ui/button'

export function ReinstallServer() {
	return (
		<Button variant="ghost" className="text-lg gap-2 px-4 text-foreground/90">
			<RotateCcw size={24} className="text-primary" />
			Переустановить
		</Button>
	)
}
