import {useSpring} from 'react-spring'

export const useScrollToElement = () => {
	const [, setY] = useSpring(() => ({ y: 0 }))

	let isStopped = false
	const onWheel = () => {
		isStopped = true
		window.removeEventListener('wheel', onWheel)
	}

	const scrollToTarget = (node) => {
		const value = window.scrollY + node.getBoundingClientRect().top

		window.addEventListener('wheel', onWheel)

		setY({
			y: value,
			reset: true,
			from: { y: window.scrollY },
			onRest: () => {
				isStopped = false
				window.removeEventListener('wheel', onWheel)
			},
			onChange: ({y}) => {
				if (!isStopped) {
					window.scroll(0, y)
				}
			}
		})
	}

	return {scrollToTarget}
}
