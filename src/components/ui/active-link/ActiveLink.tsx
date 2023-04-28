import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React, { Children, FC, PropsWithChildren } from 'react'

type IActiveLink = {
	activeClassName: string
	href: string
	classname?: string
}

const ActiveLink: FC<PropsWithChildren<IActiveLink>> = ({
	activeClassName,
	href,
	classname,
	children,
}) => {
	const { asPath } = useRouter()

	const className =
		asPath === href
			? `${classname ? classname : ''} ${activeClassName}`.trim()
			: classname
			? classname
			: ''

	return (
		<Link href={href} className={className}>
			{children}
		</Link>
	)
}

export default ActiveLink
