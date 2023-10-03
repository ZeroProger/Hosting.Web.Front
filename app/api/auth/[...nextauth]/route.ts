import NextAuth, { Account, CallbacksOptions, Profile } from 'next-auth'
import type { Provider } from 'next-auth/providers'
import DiscordProvider from 'next-auth/providers/discord'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

const providers: Provider[] = [
	DiscordProvider({
		clientId: process.env.DISCORD_ID,
		clientSecret: process.env.DISCORD_SECRET,
	}),
	GoogleProvider({
		clientId: process.env.GOOGLE_ID,
		clientSecret: process.env.GOOGLE_SECRET,
	}),
	GithubProvider({
		clientId: process.env.GITHUB_ID,
		clientSecret: process.env.GITHUB_SECRET,
	}),
]

const callbacks: Partial<CallbacksOptions<Profile, Account>> | undefined = {}

callbacks.signIn = async function signIn({user, account, profile}) {
	if (!account || !profile) return false

	if (account.provider === 'github') {    
		
			const githubUser = {
					id: profile.id,
					login: profile.login,
					name: profile.name,
					avatar: user.image
			}
	
			user.accessToken = await getTokenFromYourAPIServer('github', githubUser)
			return true
	}

	return false;
}

callbacks.jwt = async function jwt({token, user}) {
	if (user) {
			token = { accessToken: user.accessToken }
	}

	return token
}

callbacks.session = async function session({session, token}) {
	session.accessToken = token.accessToken

	return session
}

const options = {
	providers,
	callbacks
}

const handler = NextAuth(options)

export { handler as GET, handler as POST }
