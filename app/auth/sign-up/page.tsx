import { Metadata } from 'next'

import { SeoConfig } from '@/shared/config/common/seo'

import { SignUp } from '@/pages-flat/auth'

export const metadata: Metadata = SeoConfig.auth.signUp

export default function SignUpPage() {
	return <SignUp />
}
