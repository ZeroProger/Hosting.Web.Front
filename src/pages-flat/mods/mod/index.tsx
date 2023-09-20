import styles from './styles.module.scss'

export function Mod({ modId }: { modId: number }) {
	return <div className={styles.container}>Mod {modId}</div>
}
