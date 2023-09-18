import parse from 'html-react-parser'
import { FC } from 'react'

import { Icon } from '@/components/ui/Icon'

import { ITariff } from '@/shared/types/tariff.types'

import { formatCpuFrequency, formatMemory, getCpuCoresCount } from '@/utils/tariffs/tariffs'

import { secondaryBlue } from '@/config/constants'

import styles from './TariffData.module.scss'

interface ITariffData {
	tariff: ITariff
}

const TariffData: FC<ITariffData> = ({ tariff }) => {
	return (
		<div className={styles.container}>
			<div className={styles.tariffDescription}>{parse(tariff.description)}</div>
			<div className={styles.tariffProperties}>
				<div className={styles.property}>
					<div className={styles.propertyLabel}>
						<Icon name="RiCpuLine" size={28} color={secondaryBlue} />
						Процессор:
					</div>
					<div className={styles.propertyValue}>
						<span>
							{tariff.cpuName} {formatCpuFrequency(tariff.cpuFrequency)}
						</span>
						<span> &ndash; </span>
						<span>
							{`${getCpuCoresCount(tariff.allocatedCpu)}x`}
							{tariff.isCpuPerSlot && <> / 10 слотов</>}
						</span>
					</div>
				</div>
				<div className={styles.property}>
					<div className={styles.propertyLabel}>
						<Icon name="FaMemory" size={28} color={secondaryBlue} />
						Оперативная память:
					</div>
					<div className={styles.propertyValue}>
						{formatMemory(tariff.allocatedMemory)}
						{tariff.isMemoryPerSlot && <> / слот</>}
					</div>
				</div>
				<div className={styles.property}>
					<div className={styles.propertyLabel}>
						<Icon name="TfiHarddrives" size={24} color={secondaryBlue} />
						Диск:
					</div>
					<div className={styles.propertyValue}>
						{formatMemory(tariff.allocatedDiskSpace)} SSD NVME
					</div>
				</div>
			</div>
		</div>
	)
}

export default TariffData
