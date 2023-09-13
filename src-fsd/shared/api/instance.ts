import { SERVER_URL } from '@/shared/config/constants'
import axios from 'axios'

export const axiosClassic = axios.create({
	baseURL: `${SERVER_URL}/api`,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
})

//TODO: axiosAuth (как правильно реализовать авторизацию в next 13.4 app router???)

export const axiosCurseForge = axios.create({
	baseURL: `${SERVER_URL}/api/external/curseforge/`,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
})