import { Cpu } from 'lucide-react'

import { Button } from '@/shared/ui/button'

export function CheckServerTariff() {
	return (
		<Button variant="ghost" className="text-lg gap-2 px-4 text-foreground/90">
			<Cpu size={24} className="text-primary" />
			Тариф
		</Button>
	)
}
