'use client'

import axios from 'axios'
import Cookies from 'js-cookie'

import { API_SERVER_URL } from '@/app/config/api'

import { AUTH_TOKEN_COOKIE_KEY } from '@/entities/auth'
import { getLocalStorageData } from '@/shared/utils/localStorage'

export const axiosAuth = () =>
	axios.create({
		baseURL: `${API_SERVER_URL}/api/v2`,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			'X-Auth-Token':
				Cookies.get(AUTH_TOKEN_COOKIE_KEY) || getLocalStorageData(AUTH_TOKEN_COOKIE_KEY),
		},
		timeout: 60000,
	})
