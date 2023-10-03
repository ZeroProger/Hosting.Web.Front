import clsx from 'clsx'
import { MinusCircle } from 'lucide-react'

import { IMod } from '@/shared/api/curse-forge'
import { removeModFromCart } from '@/shared/store/mod'
import { Button } from '@/shared/ui/button'

export function RemoveModFromCart({ mod, size = 'normal' }: { mod: IMod; size?: 'sm' | 'normal' }) {
	const handleRemoveModClick = () => {
		removeModFromCart(mod)
	}

	return (
		<Button
			variant="destructive"
			size="sm"
			className={clsx({
				'py-0 text-md w-full flex items-center gap-2 leading-[normal]': size === 'sm',
				'h-auto py-2 px-4 text-lg w-full flex items-center gap-2': size === 'normal',
			})}
			onClick={handleRemoveModClick}
		>
			<MinusCircle size={24} />
			Убрать
		</Button>
	)
}
