import type { Meta, StoryObj } from '@storybook/react'

import { Skeleton, SkeletonList } from './skeleton'

const meta: Meta<typeof SkeletonList> = {
	component: SkeletonList,
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SkeletonList>

export const Default: Story = {
	render: () => <Skeleton className="w-[300px] h-10" />,
}

export const List: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<SkeletonList count={5} height={40} />
		</div>
	),
}
