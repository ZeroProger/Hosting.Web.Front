import axios from 'axios'

import { SERVER_URL } from '@/shared/config/common/constants'

export const axiosClassic = axios.create({
	baseURL: `${SERVER_URL}/api`,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
})
