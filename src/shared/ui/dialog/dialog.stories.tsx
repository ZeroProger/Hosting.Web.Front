import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from './dialog'

const meta: Meta<typeof Dialog> = {
	component: Dialog,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Dialog>

export const Default: Story = {
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Open</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Title</DialogTitle>
					<DialogDescription>Description of dialog</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Button variant="primary">Submit</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
}
