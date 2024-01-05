import { useStore } from 'effector-react'
import { Package, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import siteLogo from '@/app/assets/images/logo-green.png'

import { useFetchServer } from '@/shared/queries/server'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { $modsCart } from '@/shared/store/mod'
import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button'
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/shared/ui/dialog'

import { useModsCart } from '../hooks'
import styles from './styles.module.scss'

export function ModsCart() {
	const serverHash = useStore($serverHash)
	const modsCart = useStore($modsCart)

	const { data: server } = useFetchServer(serverHash)

	const { modalOpen, functions } = useModsCart()
	const {
		handleModalClose,
		handleModalOpenChange,
		handleRemoveModClick,
		handleClearCart,
		handleSubmitCart,
		handleModLinkClick,
	} = functions

	if (modsCart.length === 0) return null

	return (
		<Dialog open={modalOpen} onOpenChange={handleModalOpenChange}>
			<DialogTrigger asChild>
				<Button
					variant="ghost"
					className="h-auto py-1 sm:px-2 px-4 text-lg gap-3 whitespace-nowrap relative"
				>
					<Badge content={modsCart.length}>
						<Package size={24} />
						<span className="hidden sm:inline">Моды к установке</span>
					</Badge>
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-xl">
				<DialogHeader>
					<DialogTitle className="sm:text-center px-5">
						Моды к установке на сервер {server?.gameServerName}
					</DialogTitle>
				</DialogHeader>
				<ul className={styles.list}>
					{modsCart.map((mod) => (
						<li key={mod.id} className={styles.item}>
							<div className={styles.image}>
								<Image
									src={mod.logo ? mod.logo.thumbnailUrl : siteLogo.src}
									alt={`Логотип мода ${mod.name}`}
									className={styles.image}
									width={40}
									height={40}
								/>
							</div>
							<Link href={ModUrls.mod(serverHash!, mod.id)} className={styles.title}>
								{mod.name}
							</Link>
							<Button
								variant="ghost"
								size="icon"
								className="p-0 rounded-full text-destructive hover:text-destructive-foreground hover:bg-destructive"
								onClick={() => handleRemoveModClick(mod)}
							>
								<X size={24} />
							</Button>
						</li>
					))}
				</ul>
				<DialogFooter className="sm:justify-center sm:space-x-0 gap-2">
					<Button variant="outline" className="text-lg" onClick={handleClearCart}>
						Сбросить
					</Button>
					<Button variant="primary" className="text-lg" onClick={handleSubmitCart}>
						Установить
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
