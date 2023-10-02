import { ModUrls, ServerUrls } from '@/shared/routes/urls'

export type ServerPathPart = Exclude<keyof typeof ServerUrls.server, 'overview'>
export type ModPathPart = keyof typeof ModUrls

export type PathPart = ServerPathPart | ModPathPart
