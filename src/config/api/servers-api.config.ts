export const getCreateServerUrl = () => '/servers/compositor/create-server'
export const getStartServerContainerUrl = () => '/servers/compositor/start-server'
export const getStopServerContainerUrl = () => '/servers/compositor/stop-server'
export const getRemoveServerUrl = () => '/servers/compositor/remove-server'
export const getServersUrl = (hash?: string) =>
	`/servers/compositor/get-server${hash ? `/${hash}` : ''}`
export const getUpdateServerUrl = () => '/servers/compositor/update-server'

export const getStartGameServerUrl = () => '/servers/controller/start-server'
export const getStopGameServerUrl = () => '/servers/controller/stop-server'

export const getMessagingSendUrl = () => '/servers/messaging/send'
export const getMessagingLogsChunkUrl = () => '/servers/messaging/get-logs'
export const getMessagingLogsAllUrl = () => '/servers/messaging/get-all-logs'

export const getMinecraftPublicServersRequest = { kind: 'minecraft', isPublic: true }
export const getMinecraftUserServersRequest = { kind: 'minecraft', isPublic: false }
