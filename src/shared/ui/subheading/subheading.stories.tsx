import type { Meta, StoryObj } from '@storybook/react'

import { SubHeading } from './subheading'

const meta: Meta<typeof SubHeading> = {
	component: SubHeading,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SubHeading>

export const Default: Story = {
	render: () => (
		<>
			<SubHeading level={2}>Level2</SubHeading>
			<SubHeading level={3}>Level3</SubHeading>
			<SubHeading level={4}>Level4</SubHeading>
			<SubHeading level={5}>Level5</SubHeading>
		</>
	),
}
