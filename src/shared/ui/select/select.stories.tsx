import type { Meta, StoryObj } from '@storybook/react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select'

const meta: Meta<typeof Select> = {
	component: Select,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Select>

const selectOptions: { label: string; value: string }[] = [
	{ label: 'Option 1', value: 'option-1' },
	{ label: 'Option 2', value: 'option-2' },
	{ label: 'Option 3', value: 'option-3' },
	{ label: 'Option 4', value: 'option-4' },
	{ label: 'Option 5', value: 'option-5' },
]

export const Default: Story = {
	render: () => (
		<Select>
			<SelectTrigger>
				<SelectValue placeholder="Выберите значение"></SelectValue>
			</SelectTrigger>
			<SelectContent sideOffset={5} className="max-h-[300px]">
				{selectOptions.map((item) => (
					<SelectItem value={item.value} key={item.value}>
						{item.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	),
}
