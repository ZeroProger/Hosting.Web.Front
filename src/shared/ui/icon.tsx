'use client'

import loadable, { LoadableComponent } from '@loadable/component'
import { memo } from 'react'
import { IconBaseProps } from 'react-icons'

interface typesPropsIcon extends IconBaseProps {
	name: string
}

function areEqual(prevProps: typesPropsIcon, nextProps: typesPropsIcon) {
	return prevProps.name === nextProps.name
}

export const Icon = memo(function Icon({ name, ...props }: typesPropsIcon): JSX.Element {
	const lib = name
		.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
		.split(' ')[0]
		.toLocaleLowerCase()

	const clearName = name.replace(/([\d-])/g, '')

	const ElementIcon: LoadableComponent<IconBaseProps> = loadable(
		() => import(`react-icons/${lib}/index.js`),
		{
			resolveComponent: (el: JSX.Element) => {
				return el[clearName as keyof JSX.Element]
			},
		}
	)

	return <ElementIcon {...props} />
}, areEqual)
