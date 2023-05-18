import axios from 'axios'
import Cookies from 'js-cookie'

import { getLocalStorageData } from '@/utils/localStorage/localStorage'

import { API_SERVER_URL } from '@/config/api/api.config'

export const axiosClassic = axios.create({
	baseURL: API_SERVER_URL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
})

export const axiosAuth = () =>
	axios.create({
		baseURL: API_SERVER_URL,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			'X-Auth-Token': Cookies.get('authToken') || getLocalStorageData('authToken'),
		},
	})

export const axiosCurseForge = axios.create({
	baseURL: `${API_SERVER_URL}/external/curseforge/`,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
})
