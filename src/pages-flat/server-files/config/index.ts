import { CSSProperties } from 'react'

export const baseStyle: CSSProperties = {
	borderWidth: 2,
	minHeight: '400px',
	borderRadius: 'var(--radius)',
	borderColor: 'transparent',
	borderStyle: 'dashed',
	backgroundColor: 'transparent',
	color: 'hsl(var(--foreground))',
	outline: 'none',
	transition: 'border .24s ease-in-out',
}

export const focusedStyle: CSSProperties = {
	borderColor: 'transparent',
}

export const acceptStyle: CSSProperties = {
	borderColor: 'hsl(var(--primary))',
}

export const rejectStyle: CSSProperties = {
	borderColor: 'hsl(var(--destructive))',
}
