import { ModUrls, ServerUrls } from '@/shared/routes/urls'

export type ServerPathPart = keyof typeof ServerUrls.server
export type ModPathPart = keyof typeof ModUrls

export type PathPart = ServerPathPart | ModPathPart
