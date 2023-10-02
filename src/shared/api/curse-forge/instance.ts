import axios from 'axios'

import { SERVER_URL } from '@/shared/config/common/constants'

export const axiosCurseForge = axios.create({
	baseURL: `${SERVER_URL}/api/v2/external/curseforge/`,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
})
