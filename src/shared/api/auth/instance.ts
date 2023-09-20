import axios from 'axios'
import Cookies from 'js-cookie'

import { API_SERVER_URL } from '@/app/config/api'

import { getLocalStorageData } from '@/shared/utils/localStorage'

export const axiosAuth = () =>
	axios.create({
		baseURL: `${API_SERVER_URL}/api/v2`,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			'X-Auth-Token': Cookies.get('authToken') || getLocalStorageData('authToken'),
		},
		timeout: 60000,
	})
