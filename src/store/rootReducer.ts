import { serverReducer } from './server/server.slice'
import { userReducer } from './user/user.slice'

export const reducers = {
	server: serverReducer,
	user: userReducer,
}
