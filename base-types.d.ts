type BaseDBData = {
	id: number
	createdAt: Date
	updatedAt: Date
}

type ResponseResult = {
	success: boolean
	error: string
}

type Nullable<T> = { [K in keyof T]: T[K] | null }
