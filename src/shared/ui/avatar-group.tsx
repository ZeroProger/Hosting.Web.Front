// #TODO Avatar
// import { Avatar, AvatarGroupProps } from '@nextui-org/react'
// import { FC } from 'react'

// import user1 from '@/assets/images/head1.webp'
// import user2 from '@/assets/images/head2.png'
// import user3 from '@/assets/images/head3.webp'
// import user4 from '@/assets/images/head4.webp'

// interface IAvatarGroup extends AvatarGroupProps {}

// export const AvatarGroup: FC<IAvatarGroup> = ({ className }) => {
// 	const users = [user1, user2, user3, user4]
// 	return (
// 		<Avatar.Group className={className}>
// 			{users.map(({ src }) => (
// 				<Avatar
// 					src={src}
// 					key={src}
// 					bordered
// 					stacked
// 					squared
// 					size="sm"
// 					css={{
// 						'.nextui-avatar-bg': {
// 							backgroundColor: 'transparent',
// 						},
// 					}}
// 				/>
// 			))}
// 		</Avatar.Group>
// 	)
// }
