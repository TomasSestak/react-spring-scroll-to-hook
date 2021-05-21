import React from 'react'
import useScrollTo from 'react-spring-scroll-to-hook'

const App = () => {
	const {scrollTo} = useScrollTo()
	return (
		<>
			<header id={'id'}/>
			<button type="button" onClick={scrollTo}>
				Click me!
			</button>
		</>
	)
}
export default App
