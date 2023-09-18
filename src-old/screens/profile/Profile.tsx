import clsx from 'clsx'
import Image from 'next/image'
import { FC, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'

import Button from '@/components/ui/form-elements/Button'
import SubHeading from '@/components/ui/heading/SubHeading'
import InfoBlock from '@/components/ui/info-block/InfoBlock'

import { useAuth } from '@/hooks/auth/useAuth'

import Meta from '@/utils/meta/Meta'

import EmailFields from './EmailFields'
import LoginFields from './LoginFields'
import PasswordFields from './PasswordFields'
import styles from './Profile.module.scss'
import { IEmailChange, ILoginChange, IPasswordChange } from './profile.interface'

interface IProfile {}

const Profile: FC<IProfile> = () => {
	const { user } = useAuth()

	const [domLoaded, setDomLoaded] = useState(false)

	const {
		register: registerInputLogin,
		handleSubmit: handleSubmitLogin,
		formState: formStateLogin,
		reset: resetLogin,
		watch: watchLogin,
		getValues: getValuesLogin,
	} = useForm<ILoginChange>({
		mode: 'all',
		defaultValues: useMemo(() => {
			return { login: user?.userName }
		}, [user]),
	})

	const {
		register: registerInputEmail,
		handleSubmit: handleSubmitEmail,
		formState: formStateEmail,
		reset: resetEmail,
		watch: watchEmail,
		getValues: getValuesEmail,
	} = useForm<IEmailChange>({
		mode: 'all',
		defaultValues: useMemo(() => {
			return { currentEmail: user?.email }
		}, [user]),
	})

	const {
		register: registerInputPassword,
		handleSubmit: handleSubmitPassword,
		formState: formStatePassword,
		reset: resetPassword,
		watch: watchPassword,
		getValues: getValuesPassword,
	} = useForm<IPasswordChange>({ mode: 'all' })

	useEffect(() => {
		setDomLoaded(true)
	}, [])

	const onLoginSubmit = () => {
		console.log('onLoginSubmit', getValuesLogin())
	}

	const onEmailSubmit = () => {
		console.log('onEmailSubmit', getValuesEmail())
	}

	const onPasswordSubmit = () => {
		console.log('onPasswordSubmit', getValuesPassword())
	}

	const handleEmailConfirm = () => {
		console.log('handleEmailConfirm')
	}

	const handleVkLink = () => {
		console.log('handleVkLink')
	}

	return (
		<>
			{domLoaded && (
				<Meta title="Мой профиль">
					<div className={styles.container}>
						{user != null && (
							<div className={styles.settings}>
								<div className={styles.column}>
									<div className={styles.dataBlock}>
										<form onSubmit={handleSubmitLogin(onLoginSubmit)} className={styles.form}>
											<div className={styles.dataBlockHeader}>
												<SubHeading text="Персональная информация" className="text-2xl" />
												<div className={styles.actions}>
													<Button type="submit" disabled={watchLogin().login === user.userName}>
														Сохранить
													</Button>
												</div>
											</div>
											<div className={styles.dataBlockContent}>
												{user.avatarUrl.length > 0 && (
													<div className={clsx(styles.innerBlock, styles.top)}>
														<div className={styles.innerBlockTitle}>
															<SubHeading text="Аватар" className="text-lg" />
														</div>
														<div className={styles.innerBlockContent}>
															<Image
																src={user.avatarUrl}
																alt={`Аватар ${user.userName}`}
																width={180}
																height={180}
															/>
														</div>
													</div>
												)}
												<LoginFields register={registerInputLogin} formState={formStateLogin} />
											</div>
										</form>
									</div>
									<div className={styles.dataBlock}>
										<form onSubmit={handleSubmitEmail(onEmailSubmit)} className={styles.form}>
											<div className={styles.dataBlockHeader}>
												<SubHeading text="Почта" className="text-2xl" />
												<div className={styles.actions}>
													<Button type="button" onClick={handleEmailConfirm}>
														Подтвердить
													</Button>
													<Button
														type="submit"
														disabled={
															(watchEmail().newEmail !== undefined &&
																watchEmail().newEmail.length === 0) ||
															formStateEmail.errors.newEmail?.message?.length! > 0
														}
													>
														Сохранить
													</Button>
												</div>
											</div>
											<div className={styles.dataBlockContent}>
												<EmailFields
													register={registerInputEmail}
													formState={formStateEmail}
													watch={watchEmail}
												/>
												<div className={styles.innerBlock}>
													<InfoBlock withIcon>
														Используйте только активный email, туда придёт ссылка для подтверждения
														смены почты
													</InfoBlock>
												</div>
											</div>
										</form>
									</div>
								</div>
								<div className={styles.column}>
									<div className={styles.dataBlock}>
										<div className={styles.dataBlockHeader}>
											<SubHeading text="Привязка ВКонтакте" className="text-2xl" />
											<div className={styles.actions}>
												<Button type="button" onClick={handleVkLink}>
													Привязать
												</Button>
											</div>
										</div>
										<div className={styles.dataBlockContent}>
											<div className={styles.innerBlock}>
												<InfoBlock withIcon>
													Аккаунт привязывается 1 раз, отвязать его в дальнейшем будет не возможно!
												</InfoBlock>
											</div>
										</div>
									</div>
									<div className={styles.dataBlock}>
										<form onSubmit={handleSubmitPassword(onPasswordSubmit)} className={styles.form}>
											<div className={styles.dataBlockHeader}>
												<SubHeading text="Изменить пароль" className="text-2xl" />
												<div className={styles.actions}>
													<Button
														type="submit"
														disabled={
															(watchPassword().currentPassword !== undefined &&
																watchPassword().currentPassword.length === 0) ||
															(watchPassword().newPassword !== undefined &&
																watchPassword().newPassword.length === 0) ||
															(watchPassword().confirmNewPassword !== undefined &&
																watchPassword().confirmNewPassword.length === 0) ||
															formStatePassword.errors.currentPassword?.message?.length! > 0 ||
															formStatePassword.errors.newPassword?.message?.length! > 0 ||
															formStatePassword.errors.confirmNewPassword?.message?.length! > 0
														}
													>
														Сохранить
													</Button>
												</div>
											</div>
											<div className={styles.dataBlockContent}>
												<PasswordFields
													register={registerInputPassword}
													formState={formStatePassword}
													watch={watchPassword}
												/>
											</div>
										</form>
									</div>
								</div>
							</div>
						)}
					</div>
				</Meta>
			)}
		</>
	)
}

export default Profile
