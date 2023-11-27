import { AuthUrls } from '@/shared/routes/urls'
import { redirect } from 'next/navigation'

export default function AuthPage() {
	redirect(AuthUrls.signIn())
}
