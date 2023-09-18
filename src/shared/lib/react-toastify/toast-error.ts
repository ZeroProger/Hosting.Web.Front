import { toast } from 'react-toastify'

import { errorCatch } from '@/shared/api/error'

export const toastError = (error: any) => {
	const message = errorCatch(error)

	toast.error(message)
}
