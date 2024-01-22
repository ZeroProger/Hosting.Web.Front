import { redirect } from 'next/navigation'

import { AuthUrls } from '@/shared/routes/urls'

export default function AuthPage() {
	redirect(AuthUrls.signIn())
}
