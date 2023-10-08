import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '../input'
import { Label } from '../label'

const meta: Meta<typeof Label> = {
	component: Label,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Label>

export const Default: Story = {
	render: () => (
		<div>
			<Label htmlFor="title" className="mb-2">
				Заголовок
			</Label>
			<Input id="title" placeholder="Введите заголовок" />
		</div>
	),
}
