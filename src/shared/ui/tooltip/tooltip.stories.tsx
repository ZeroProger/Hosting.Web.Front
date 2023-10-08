import type { Meta, StoryObj } from '@storybook/react'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'

const meta: Meta<typeof Tooltip> = {
	component: Tooltip,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
	render: () => (
		<div className="p-10">
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>Hover to show</TooltipTrigger>
					<TooltipContent>Tooltip content</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	),
}
