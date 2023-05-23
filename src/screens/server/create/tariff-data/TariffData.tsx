import { FC } from 'react'

import { Icon } from '@/components/ui/Icon'

import { ITariff } from '@/shared/types/tariff.types'

import { formatCpuFrequency, formatMemoryToGB, getCpuCoresCount } from '@/utils/tariffs/tariffs'

import { secondaryBlue } from '@/config/constants'

import styles from './TariffData.module.scss'

interface ITariffData {
	tariff: ITariff
}

const TariffData: FC<ITariffData> = ({ tariff }) => {
	return (
		<div className={styles.container}>
			<div className={styles.tariffDescription}>{tariff.description}</div>
			<div className={styles.tariffProperties}>
				<div className={styles.property}>
					<div className={styles.propertyLabel}>
						<Icon name="RiCpuLine" size={28} color={secondaryBlue} />
						Процессор:
					</div>
					<div className={styles.propertyValue}>
						{getCpuCoresCount(tariff.allocatedCpu)}
						{'x '}
						{tariff.cpuName} {formatCpuFrequency(tariff.cpuFrequency)}
					</div>
				</div>
				<div className={styles.property}>
					<div className={styles.propertyLabel}>
						<Icon name="FaMemory" size={28} color={secondaryBlue} />
						Оперативная память:
					</div>
					<div className={styles.propertyValue}>{formatMemoryToGB(tariff.allocatedMemory)}</div>
				</div>
				<div className={styles.property}>
					<div className={styles.propertyLabel}>
						<Icon name="TfiHarddrives" size={24} color={secondaryBlue} />
						Диск:
					</div>
					<div className={styles.propertyValue}>
						{formatMemoryToGB(tariff.allocatedDiskSpace)} SSD NVME
					</div>
				</div>
			</div>
		</div>
	)
}

export default TariffData
