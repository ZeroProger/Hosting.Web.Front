import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { ILogoutRequest } from '@/shared/types/requests/auth-requests.types'

import { AuthService } from '@/services/auth/auth.service'

import { toastError } from '@/utils/toast/toast-error'

import { getLoginUrl, getLogoutUrl, getRegistrationUrl } from '@/config/api/account-api.config'

import { IAuthResponse, ILoginData, IRegisterData } from './user.interface'

export const register = createAsyncThunk<IAuthResponse, IRegisterData>(
	getRegistrationUrl(),
	async ({ email, login, password, confirmPassword }, thunkApi) => {
		try {
			if (password !== confirmPassword) throw new Error('Пароли не совпадают')

			const response = await AuthService.register({ email, login, password })

			toast.success('Вы успешно зарегистрированы')

			return response.data
		} catch (error) {
			console.log(error)
			toastError(error)

			return thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, ILoginData>(
	getLoginUrl(),
	async ({ login, password }, thunkApi) => {
		try {
			const response = await AuthService.login({ login, password })

			toast.success('Вы успешно вошли в аккаунт')

			return response.data
		} catch (error) {
			toastError(error)

			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk<any, ILogoutRequest>(
	getLogoutUrl(),
	async ({ authToken }, thunkApi) => {
		try {
			const response = await AuthService.logout({ authToken })

			toast.success('Вы успешно вышли из аккаунта')

			return response.data
		} catch (error) {
			toastError(error)

			return thunkApi.rejectWithValue(error)
		}
	}
)
