import { SignIn } from '@/pages-flat/auth'
import { SeoConfig } from '@/shared/config/common/seo'
import { Metadata } from 'next'

export const metadata: Metadata = SeoConfig.auth.signIn

export default function SignInPage() {
	return <SignIn />
}
