export const scrollTo = (id: string) => {
	const element = document?.getElementById(id)
	const header = document?.querySelector('.nextui-navbar')
	const headerOffset = header?.getBoundingClientRect().height || 0
	const elementPosition = element?.getBoundingClientRect().top || 0
	const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20

	window.scrollTo({
		top: offsetPosition,
		behavior: 'smooth',
	})
}
