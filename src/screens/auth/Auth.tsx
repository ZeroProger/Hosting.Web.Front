import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/ui/form-elements/Button'
import Heading from '@/components/ui/heading/Heading'

import { useAuth } from '@/hooks/auth/useAuth'
import { useAuthRedirect } from '@/hooks/auth/useAuthRedirect'
import { useActions } from '@/hooks/useActions'

import Meta from '@/utils/meta/Meta'

import styles from './Auth.module.scss'
import LoginFields from './LoginFields'
import RegisterFields from './RegisterFields'
import { ILoginInput, IRegisterInput } from './auth.interface'

interface IAuth {}

const Auth: FC<IAuth> = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()
	const { query } = useRouter()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInputLogin,
		handleSubmit: handleSubmitLogin,
		formState: formStateLogin,
		reset: resetLogin,
	} = useForm<ILoginInput>({ mode: 'onChange' })

	const {
		register: registerInputRegister,
		handleSubmit: handleSubmitRegister,
		formState: formStateRegister,
		reset: resetRegister,
		watch: watchRegister,
	} = useForm<IRegisterInput>({ mode: 'onChange' })

	const { login, register } = useActions()

	const onLoginSubmit: SubmitHandler<ILoginInput> = (data) => {
		if (type === 'login') {
			login(data)
		}

		resetLogin()
	}

	const onRegisterSubmit: SubmitHandler<IRegisterInput> = (data) => {
		console.log(data)
		if (type === 'register') {
			register(data)
		}

		resetRegister()
	}

	const handleSetLoginForm = () => {
		setType('login')
	}

	const handleSetRegisterForm = () => {
		setType('register')
	}

	useEffect(() => {
		if (query.action === 'login') {
			setType('login')
		}
		if (query.action === 'register') {
			setType('register')
		}
	}, [query])

	return (
		<Meta title={type === 'login' ? 'Вход' : 'Регистрация'}>
			<div className={styles.container}>
				<div className={styles.formWrapper}>
					<Heading title={type === 'login' ? 'Вход' : 'Регистрация'} />
					{type === 'login' && (
						<form onSubmit={handleSubmitLogin(onLoginSubmit)} className={styles.loginForm}>
							<LoginFields formState={formStateLogin} register={registerInputLogin} />
							<Button type="submit" disabled={isLoading}>
								Войти
							</Button>
						</form>
					)}
					{type === 'register' && (
						<form onSubmit={handleSubmitRegister(onRegisterSubmit)} className={styles.registerForm}>
							<RegisterFields
								formState={formStateRegister}
								register={registerInputRegister}
								watch={watchRegister}
							/>
							<Button type="submit" disabled={isLoading}>
								Зарегистрироваться
							</Button>
						</form>
					)}
					<div className={styles.actions}>
						{type === 'register' && (
							<button type="button" onClick={handleSetLoginForm}>
								Вход
							</button>
						)}
						{type === 'login' && (
							<button type="button" onClick={handleSetRegisterForm}>
								Регистрация
							</button>
						)}
					</div>
				</div>
			</div>
		</Meta>
	)
}

export default Auth
