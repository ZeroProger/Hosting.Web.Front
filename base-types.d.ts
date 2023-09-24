type BaseDBData = {
	id: number
	createdAt: Date
	updatedAt: Date
}

type ResponseResult = {
	success: boolean
	error: string
}

interface RequestResult {
	isLoading: boolean
	error: string
}

type Nullable<T> = { [K in keyof T]: T[K] | null }

type ToUnion<T extends Record<string, string | number>> = keyof {
  [Prop in keyof T as `${T[Prop]}`]: Prop
}