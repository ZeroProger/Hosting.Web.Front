'use client'

import { useAuth } from '@/entities/auth'
import { ServerUrls } from '@/shared/routes/urls'
import { Button } from '@/shared/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SignInFields, signInFormSchema } from '../../types'
import styles from './styles.module.scss'

export function SignInForm() {
	const router = useRouter()

	const { signIn } = useAuth()

	const form = useForm<SignInFields>({
		resolver: zodResolver(signInFormSchema),
		defaultValues: { login: '', password: '' },
		mode: 'onChange',
	})

	const onFormSubmit: SubmitHandler<SignInFields> = async (data: SignInFields) => {
		const success = await signIn(data)

		if (success) {
			form.reset()

			router.push(ServerUrls.servers())
		}
	}

	return (
		<div className={styles.container}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onFormSubmit)}>
					<FormField
						control={form.control}
						name="login"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Имя пользователя</FormLabel>
								<FormControl>
									<Input placeholder="Имя пользователя" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Пароль</FormLabel>
								<FormControl>
									<Input type="password" placeholder="Пароль" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button variant="primary" type="submit">
						Войти
					</Button>
				</form>
			</Form>
		</div>
	)
}
