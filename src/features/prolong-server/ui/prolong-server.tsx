import { CalendarPlus } from 'lucide-react'

import { Button } from '@/shared/ui/button'

export function ProlongServer() {
	return (
		<Button variant="ghost" className="text-lg gap-2 px-4 text-foreground/90">
			<CalendarPlus size={24} className="text-primary" />
			Продлить
		</Button>
	)
}
