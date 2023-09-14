import { toast } from 'react-toastify'

import { errorCatch } from '@/api/helpers'

export const toastError = (error: any) => {
	const message = errorCatch(error)

	toast.error(message)
}
