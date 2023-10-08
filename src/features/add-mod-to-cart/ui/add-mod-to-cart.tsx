import clsx from 'clsx'
import { PlusCircle } from 'lucide-react'

import { IMod } from '@/shared/api/curse-forge'
import { addModToCart } from '@/shared/store/mod'
import { Button } from '@/shared/ui/button'

export function AddModToCart({ mod, size = 'normal' }: { mod: IMod; size?: 'sm' | 'normal' }) {
	const handleAddModClick = () => {
		addModToCart(mod)
	}

	return (
		<Button
			variant="primary"
			size="sm"
			className={clsx({
				'py-0 text-md w-full flex items-center gap-2 leading-[normal]': size === 'sm',
				'h-auto py-2 px-4 text-lg w-full flex items-center gap-2': size === 'normal',
			})}
			onClick={handleAddModClick}
		>
			<PlusCircle size={20} />
			Добавить
		</Button>
	)
}
