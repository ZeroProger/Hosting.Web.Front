import { TabsContent } from '@radix-ui/react-tabs'
import type { Meta, StoryObj } from '@storybook/react'

import { Tabs, TabsList, TabsTrigger } from './tabs'

const meta: Meta<typeof Tabs> = {
	component: Tabs,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
	render: () => (
		<Tabs defaultValue="tab1" className="flex flex-col gap-4 items-center">
			<TabsList className="w-max">
				<TabsTrigger value="tab1">Tab 1</TabsTrigger>
				<TabsTrigger value="tab2">Tab 2</TabsTrigger>
				<TabsTrigger value="tab3">Tab 3</TabsTrigger>
			</TabsList>
			<TabsContent value="tab1">Content of Tab1</TabsContent>
			<TabsContent value="tab2">Content of Tab2</TabsContent>
			<TabsContent value="tab3">Content of Tab3</TabsContent>
		</Tabs>
	),
}
