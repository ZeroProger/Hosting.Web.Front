import { X } from 'lucide-react'

import { useClickOutside } from '@/shared/hooks'
import { Button } from '@/shared/ui/button'
import { SubHeading } from '@/shared/ui/heading'
import { Input } from '@/shared/ui/input'

import { useSelectMods } from '../hooks'

import styles from './styles.module.scss'

export function SelectMods() {
	const { mods, selectedMods, searchTerm, showList, containerRef, functions } = useSelectMods()

	const { handleClickOutside, handleSearch, handleInputFocus, handleToggleModSelection } = functions

	useClickOutside(containerRef, handleClickOutside)

	return (
		<div className={styles.container}>
			<div className={styles.searchMods} ref={containerRef}>
				<Input
					type="search"
					placeholder="Поиск модов"
					className="w-full text-xl px-6 border-border border-2 text-white bg-card focus:border-primary h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
					value={searchTerm}
					onChange={handleSearch}
					onFocus={handleInputFocus}
				/>
				{mods && mods.length > 0 && showList && (
					<div className={styles.mods}>
						{mods.map((mod) => (
							<Button
								key={mod.id}
								variant={selectedMods.find((m) => m.id === mod.id) ? 'primary' : 'outline'}
								className="h-auto py-1 px-2 text-sm inline flex-auto"
								onClick={() => handleToggleModSelection(mod)}
							>
								{mod.name}
							</Button>
						))}
					</div>
				)}
			</div>
			{selectedMods && selectedMods.length > 0 && (
				<div className={styles.selectedMods}>
					<SubHeading className="text-xl">Выбранные моды</SubHeading>
					<div className={styles.selectedList}>
						{selectedMods.map((mod) => (
							<span
								key={mod.id}
								className="bg-primary text-primary-foreground rounded-layout h-auto py-1 px-2 text-sm font-medium inline-flex flex-auto items-center justify-center gap-2 leading-[normal]"
							>
								{mod.name}
								<Button
									size="icon"
									variant="ghost"
									className="p-0 hover:bg-destructive"
									onClick={() => handleToggleModSelection(mod)}
								>
									<X size={17} strokeWidth={2.5} />
								</Button>
							</span>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
