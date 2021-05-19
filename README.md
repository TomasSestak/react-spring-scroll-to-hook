# react-spring-scroll-to-hook

> Simple custom hook for ScrollTo functionality using react-spring v9+.

[![NPM](https://img.shields.io/npm/v/react-spring-scroll-to-hook.svg)](https://www.npmjs.com/package/react-spring-scroll-to-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install react-spring-scroll-to-hook
```
```bash
yarn add react-spring-scroll-to-hook
```

## Usage

```tsx

import {config} from '@react-spring/web'
import useScrollTo from 'react-spring-scroll-to-hook'

const BasicExampleWthConfig = () => {
  const {scrollTo} = useScrollTo(config.molasses)
  return (
    <button type="button" onClick={() => scrollTo(document.querySelector('#id'))}>
        Scroll to Element
    </button>
  )
}

const ScrollToTop = () => {
	const {scrollTo} = useScrollTo()
	return (
		<button type="button" onClick={scrollTo}>
			Scroll to the top of the page with default config
		</button>
	)
}

```

## License

MIT © [TomasSestak](https://github.com/TomasSestak)
