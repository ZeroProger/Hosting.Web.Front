import Link from 'next/link'

import { ServerUrls } from '@/shared/routes/urls'

export function ServerEmpty({ isPublic }: { isPublic: boolean }) {
	return (
		<div className="text-xl">
			{isPublic ? (
				<div>На данный момент нет активных публичных серверов</div>
			) : (
				<>
					<div>У вас пока нет активных серверов.</div>
					<div>
						Cоздайте свой собственный сервер прямо сейчас, перейдя на страницу{' '}
						<Link
							href={ServerUrls.createServer()}
							className="text-primary pb-0.5 hover:border-b-2 hover:border-primary"
						>
							создания сервера
						</Link>
						{'.'}
					</div>
				</>
			)}
		</div>
	)
}
