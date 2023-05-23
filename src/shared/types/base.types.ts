import { ParsedUrlQuery } from 'querystring'

export interface IBasicDB {
	id: number
	createdAt: Date
	updatedAt: Date
}

export interface IParams extends ParsedUrlQuery {
	slug: string
	version?: string
	software?: string
}

export interface IResponseResult {
	success: boolean
	error: string
}

export type Nullable<T> = { [K in keyof T]: T[K] | null };