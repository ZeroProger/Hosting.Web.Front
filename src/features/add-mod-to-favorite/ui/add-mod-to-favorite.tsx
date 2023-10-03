import { Heart } from 'lucide-react'

import { IMod } from '@/shared/api/curse-forge'
import { Button } from '@/shared/ui/button'

export function AddModToFavorite({ mod }: { mod: IMod }) {
	return (
		<Button variant="outline" size="icon" className="py-2 px-2" id="add-to-favorites-btn-step">
			<Heart size={24} />
		</Button>
	)
}
