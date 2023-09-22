import { VariantProps } from 'class-variance-authority'
import { Effect } from 'effector'

import { Button, buttonVariants } from '@/shared/ui/button'

export function ServerControlButton({
	callback,
	variant,
	text,
	isLoading = false,
}: {
	callback: () => void,
	variant: VariantProps<typeof buttonVariants>['variant']
	text: string
	isLoading?: boolean
}) {
	return (
		<Button
			className="text-2xl flex flex-row items-center flex-nowrap gap-4"
			onClick={callback}
			disabled={isLoading}
			variant={variant}
		>
			{text}
		</Button>
	)
}
