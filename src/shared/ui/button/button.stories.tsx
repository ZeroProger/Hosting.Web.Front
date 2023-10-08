import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'

const meta: Meta<typeof Button> = {
	component: Button,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
	render: () => <Button>Button</Button>,
}

export const Primary: Story = {
	render: () => <Button variant="primary">Button</Button>,
}

export const Outline: Story = {
	render: () => <Button variant="outline">Button</Button>,
}

export const Ghost: Story = {
	render: () => <Button variant="ghost">Button</Button>,
}

export const Destructive: Story = {
	render: () => <Button variant="destructive">Button</Button>,
}
