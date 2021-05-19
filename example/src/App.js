import React from 'react'
import {config} from '@react-spring/web';
import useScrollTo from 'react-spring-scroll-to-hook'

const App = () => {
	const {scrollTo} = useScrollTo(config.molasses)
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
