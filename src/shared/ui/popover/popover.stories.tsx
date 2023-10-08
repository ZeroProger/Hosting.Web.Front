import type { Meta, StoryObj } from '@storybook/react'

import { Popover, PopoverContent, PopoverTrigger } from './popover'

const meta: Meta<typeof Popover> = {
	component: Popover,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Popover>

export const Default: Story = {
	render: () => (
		<Popover>
			<PopoverTrigger>Open</PopoverTrigger>
			<PopoverContent>Place content for the popover here.</PopoverContent>
		</Popover>
	),
}
