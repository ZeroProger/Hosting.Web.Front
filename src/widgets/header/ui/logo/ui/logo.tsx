import Image from 'next/image'
import Link from 'next/link'

import logo from '@/app/assets/images/logo-green.png'

import { CommonUrls } from '@/shared/routes/urls'

export function Logo() {
	return (
		<Link href={CommonUrls.home()} className="block">
			<Image
				src={logo.src}
				alt="Simple Host Logo"
				width={45}
				height={45}
				priority
				className="min-w-[45px] min-h-[45px]"
			/>
		</Link>
	)
}
