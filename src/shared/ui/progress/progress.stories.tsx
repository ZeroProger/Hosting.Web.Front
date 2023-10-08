import type { Meta, StoryObj } from '@storybook/react'

import { Progress } from './progress'

const meta: Meta<typeof Progress> = {
	component: Progress,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Progress>

export const Default: Story = {
	render: () => (
		<div className="flex flex-col gap-5">
			<Progress value={20} max={100} />
			<Progress value={40} max={100} />
			<Progress value={60} max={100} />
			<Progress value={80} max={100} />
			<Progress value={100} max={100} />
		</div>
	),
}
