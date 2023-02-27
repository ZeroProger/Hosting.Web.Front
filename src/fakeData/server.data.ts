import image1 from '@/assets/images/head1.webp'
import image2 from '@/assets/images/head2.png'
import image3 from '@/assets/images/head3.webp'
import image4 from '@/assets/images/head4.webp'

import { IServerMainInfo } from './../shared/types/server.types'

export const serverMainInfo: IServerMainInfo[] = [
	{
		label: 'Статус',
		value: 'Онлайн',
		otherInfo: {
			isOnline: true,
		},
	},
	{
		label: 'Игроки',
		value: '4/8',
		otherInfo: {
			playersImages: [image1.src, image2.src, image3.src, image4.src],
		},
	},
	{
		label: 'IP',
		value: 'arcade-sky.simplehost',
		otherInfo: {
			copyable: true,
		},
	},
	{
		label: 'Дин. IP',
		value: 'dynY6ZHOK.simplehost.cloud:10305',
		otherInfo: {
			copyable: true,
		},
	},
	{
		label: 'Ядро',
		value: 'Fabric',
		otherInfo: {
			isSoftware: true,
		},
	},
	{
		label: 'Версия',
		value: '1.19.2',
		otherInfo: {
			isVersion: true,
		},
	},
]
