import { CSS, Input } from '@nextui-org/react'
import clsx from 'clsx'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

import Button from '@/components/ui/form-elements/Button'
import SubHeading from '@/components/ui/heading/SubHeading'
import InfoBlock from '@/components/ui/info-block/InfoBlock'

import { useAuth } from '@/hooks/auth/useAuth'

import { Nullable } from '@/shared/types/base.types'

import Meta from '@/utils/meta/Meta'

import styles from './Profile.module.scss'
import { IEmailChange, IPasswordChange, IPersonalInfoChange } from './profile.interface'

interface IProfile {}

const Profile: FC<IProfile> = () => {
	const { user } = useAuth()

	const [domLoaded, setDomLoaded] = useState(false)

	//#TODO: переделать на 3 react-hook формы, с запросами на разные url для смены: логина, email, пароля, также запрос на привязку вк и подтверждение email если ещё не подтвердили
	const [personalInfoData, setPersonalInfoData] = useState<Nullable<IPersonalInfoChange>>({
		newAvatar: null,
		userName: null,
	})

	const [emailData, setEmailData] = useState<Nullable<IEmailChange>>({
		currentEmail: null,
		newEmail: null,
	})

	const [passwordData, setPasswordData] = useState<Nullable<IPasswordChange>>({
		currentPassword: null,
		newPassword: null,
		confirmNewPassword: null,
	})

	useEffect(() => {
		setDomLoaded(true)
	}, [])

	useEffect(() => {
		if (user !== null) {
			setPersonalInfoData({
				...personalInfoData,
				userName: user.userName,
			})
			setEmailData({ ...emailData, currentEmail: user.email })
		}
	}, [user])

	const handlePersonalInfoChange = () => {}

	const handlePersonalInfoSave = () => {}

	const handleEmailSave = () => {}

	const handleEmailChange = () => {}

	const handleEmailConfirm = () => {}

	const handlePasswordChange = () => {}

	const handlePasswordSave = () => {}

	const handleVkLink = () => {}

	const inputTextCSS: CSS = {
		'& input': { fontSize: '1.125rem', padding: '$2 $4' },
		'& .nextui-input-container--input': { height: '44px' },
		'& .nextui-input-wrapper': {
			background: 'transparent',
			border: '2px solid var(--light-gray)',
			borderRadius: '16px',
		},
	}

	return (
		<>
			{domLoaded && (
				<Meta title="Мой профиль">
					<div className={styles.container}>
						{user != null && (
							<div className={styles.settings}>
								<div className={styles.column}>
									<div className={styles.block}>
										<div className={styles.blockHeader}>
											<SubHeading text="Персональная информация" className="text-2xl" />
											<div className={styles.actions}>
												<Button type="button" onClick={handlePersonalInfoSave}>
													Сохранить
												</Button>
											</div>
										</div>
										<div className={styles.blockContent}>
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
											<div className={styles.innerBlock}>
												<div className={styles.innerBlockTitle}>
													<SubHeading text="Имя пользователя" className="text-lg" />
												</div>
												<div className={styles.innerBlockContent}>
													<Input
														type="text"
														placeholder="Имя пользователя"
														defaultValue={user.userName}
														css={inputTextCSS}
														value={personalInfoData.userName || ''}
														onChange={handlePersonalInfoChange}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className={styles.block}>
										<div className={styles.blockHeader}>
											<SubHeading text="Привязка ВКонтакте" className="text-2xl" />
											<div className={styles.actions}>
												<Button type="button" onClick={handleVkLink}>
													Привязать
												</Button>
											</div>
										</div>
										<div className={styles.blockContent}>
											<div className={styles.innerBlock}>
												<InfoBlock withIcon>
													Аккаунт привязывается 1 раз, отвязать его в дальнейшем будет не возможно!
												</InfoBlock>
											</div>
										</div>
									</div>
								</div>
								<div className={styles.column}>
									<div className={styles.block}>
										<div className={styles.blockHeader}>
											<SubHeading text="Почта" className="text-2xl" />
											<div className={styles.actions}>
												<Button type="button" onClick={handleEmailConfirm}>
													Подтвердить
												</Button>
												<Button type="button" onClick={handleEmailSave}>
													Сохранить
												</Button>
											</div>
										</div>
										<div className={styles.blockContent}>
											<div className={styles.innerBlock}>
												<div className={styles.innerBlockTitle}>
													<SubHeading text="Текущий email" className="text-lg" />
												</div>
												<div className={styles.innerBlockContent}>
													<Input
														type="text"
														placeholder="Текущий email"
														css={inputTextCSS}
														disabled
														value={emailData.currentEmail || ''}
													/>
												</div>
											</div>
											<div className={styles.innerBlock}>
												<div className={styles.innerBlockTitle}>
													<SubHeading text="Новый email" className="text-lg" />
												</div>
												<div className={styles.innerBlockContent}>
													<Input type="text" placeholder="Новый email" css={inputTextCSS} />
												</div>
											</div>
											<div className={styles.innerBlock}>
												<InfoBlock withIcon>
													Используйте только активный email, туда придёт ссылка для подтверждения
													смены почты
												</InfoBlock>
											</div>
										</div>
									</div>
									<div className={styles.block}>
										<div className={styles.blockHeader}>
											<SubHeading text="Изменить пароль" className="text-2xl" />
											<div className={styles.actions}>
												<Button type="button" onClick={handlePasswordChange}>
													Сохранить
												</Button>
											</div>
										</div>
										<div className={styles.blockContent}>
											<div className={styles.innerBlock}>
												<div className={styles.innerBlockTitle}>
													<SubHeading text="Текущий пароль" className="text-lg" />
												</div>
												<div className={styles.innerBlockContent}>
													<Input type="text" placeholder="Текущий пароль" css={inputTextCSS} />
												</div>
											</div>
											<div className={styles.innerBlock}>
												<div className={styles.innerBlockTitle}>
													<SubHeading text="Новый пароль" className="text-lg" />
												</div>
												<div className={styles.innerBlockContent}>
													<Input type="text" placeholder="Новый пароль" css={inputTextCSS} />
												</div>
											</div>
											<div className={styles.innerBlock}>
												<div className={styles.innerBlockTitle}>
													<SubHeading text="Повторите новый пароль" className="text-lg" />
												</div>
												<div className={styles.innerBlockContent}>
													<Input
														type="text"
														placeholder="Повторите новый пароль"
														css={inputTextCSS}
													/>
												</div>
											</div>
										</div>
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
