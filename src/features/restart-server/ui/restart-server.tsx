import { RotateCw } from 'lucide-react'

import { Button } from '@/shared/ui/button'

export function RestartServer() {
	return (
		<Button variant="ghost" className="text-xl gap-2 px-4 text-foreground/90">
			<RotateCw size={24} className="text-primary" />
			Перезапустить
		</Button>
	)
}
