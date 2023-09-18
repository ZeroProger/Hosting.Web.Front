import { modsActions } from './mods/mods.slice'
import * as serverActions from './server/server.actions'
import * as userActions from './user/user.actions'

export const rootActions = {
	...userActions,
	...serverActions,
	...modsActions,
}
