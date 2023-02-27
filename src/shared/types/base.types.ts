import { ParsedUrlQuery } from 'querystring'

export interface IBasicDB {
	id: number
	createdAt: Date
	updatedAt: Date
}

export interface IParams extends ParsedUrlQuery {
	slug: string
	version: string
	software: string
}
