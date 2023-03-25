import { ServerService } from '@/services/server.service'

import { AppDispatch } from '../index'
import { serverActions } from '../slices/server.slice'

export const fetchServer = (uuid: string) => {
	return (dispatch: AppDispatch) => {
		try {
			const data = ServerService.getServerByUUID(uuid)
			dispatch(serverActions.setServer(data))
		} catch (e) {
			return console.error(e)
		}
	}
}
