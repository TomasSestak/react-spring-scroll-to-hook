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

useScrollTo hook accepts 1 argument a that is react-spring config: https://react-spring.io/common/configs
scrollTo function returned from useScrollTo hook accepts 2 arguments:

    1: Element | string | number (number of pixels from top of the window)
    2: Number (offset in pixels from element you want to scroll to)

I don't know how three shaking works but I would recommend using <b>@react-spring/web (used in this hook)</b> instead of react-spring

## Examples

```tsx

import {config} from '@react-spring/web'
import useScrollTo from 'react-spring-scroll-to-hook'

//Scroll to element
const BasicExampleWthConfig = () => {
    const {scrollTo} = useScrollTo(config.molasses)
    return (
        <button type="button" onClick={() => scrollTo(document.querySelector('#id'))}>
            Scroll to Element with predefined config from react-spring
        </button>
    )
}

//Scroll to top
const ScrollToTop = () => {
    const {scrollTo} = useScrollTo({ mass: 1, tension: 180, friction: 12 })
    return (
        <button type="button" onClick={scrollTo}>
            Scroll to the top of the page with your config
        </button>
    )
}

//Scroll to top with offset and first argument as string only (document.querySelector is used in the hook)
const ScrollToTopWithOffset = () => {
    const {scrollTo} = useScrollTo()
    return (
        <button type="button" onClick={() => scrollTo('#id', 300)}>
            Scroll to the top of the page with default config and offset from element
        </button>
    )
}

```

## License

MIT © [TomasSestak](https://github.com/TomasSestak)
