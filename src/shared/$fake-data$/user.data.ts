export const user = {
	email: '<EMAIL>',
	username: 'username',
	avatar: 'avatar',
	featureFlags: {
		console: {
			extended: true,
			withHints: true,
		},
		mods: {
			autoInstall: true,
			checkDependencies: true,
		},
		settings: {
			prettyChange: true,
		},
		files: {
			prettyChange: true,
			textByExtensionHighlight: true,
		},
		players: {
			enabled: true,
			banPlayersControl: true,
			banIpsControl: true,
			whiteListControl: true,
			operatorsControl: true,
			showActivePlayers: true,
			kickActivePlayers: true,
		},
		backups: {
			enabled: true,
			autoSave: true,
			countLimit: 10
		}
	},
}
